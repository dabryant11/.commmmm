#!/usr/bin/env node
import { DnsValidatedCertificate } from "@aws-cdk/aws-certificatemanager";
import {
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  SSLMethod,
  ViewerCertificate,
} from "@aws-cdk/aws-cloudfront";
import { Metric } from "@aws-cdk/aws-cloudwatch";
import { CanonicalUserPrincipal, PolicyStatement } from "@aws-cdk/aws-iam";
import { ARecord, HostedZone, RecordTarget } from "@aws-cdk/aws-route53";
import { HttpsRedirect } from "@aws-cdk/aws-route53-patterns";
import { CloudFrontTarget } from "@aws-cdk/aws-route53-targets";
import { BlockPublicAccess, Bucket } from "@aws-cdk/aws-s3";
import { BucketDeployment, Source } from "@aws-cdk/aws-s3-deployment";
import { Aws, CfnOutput, Construct, RemovalPolicy, Stack } from "@aws-cdk/core";

export class StaticSite extends Construct {
  constructor(parent: Stack, name: string) {
    super(parent, name);
    const domains = [{ domainName: "darienbryant.com", name: "Homepage" }];

    domains.forEach(({ domainName, name }) => {
      const zone = HostedZone.fromLookup(this, "Zone" + name, {
        domainName,
      });
      const cloudfrontOAI = new OriginAccessIdentity(
        this,
        "cloudfront-OAI" + name,
        {
          comment: `OAI for ${name}`,
        }
      );

      new CfnOutput(this, "Site" + name, {
        value: "https://" + domainName,
      });

      // Content bucket
      const siteBucket = new Bucket(this, "SiteBucket" + name, {
        bucketName: domainName,
        websiteIndexDocument: "index.html",
        websiteErrorDocument: "index.html",
        publicReadAccess: false,
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,

        /**
         * The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
         * the new bucket, and it will remain in your account until manually deleted. By setting the policy to
         * DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
         */
        removalPolicy: RemovalPolicy.DESTROY, // NOT recommended for production code

        /**
         * For sample purposes only, if you create an S3 bucket then populate it, stack destruction fails.  This
         * setting will enable full cleanup of the demo.
         */
        autoDeleteObjects: true, // NOT recommended for production code
      });

      // Grant access to cloudfront
      siteBucket.addToResourcePolicy(
        new PolicyStatement({
          actions: ["s3:GetObject"],
          resources: [siteBucket.arnForObjects("*")],
          principals: [
            new CanonicalUserPrincipal(
              cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId
            ),
          ],
        })
      );

      new CfnOutput(this, "Bucket" + name, {
        value: siteBucket.bucketName,
      });

      // TLS certificate
      const certificateArn = new DnsValidatedCertificate(
        this,
        "SiteCertificate" + name,
        {
          domainName,
          hostedZone: zone,
          region: "us-east-1", // Cloudfront only checks this region for certificates.
        }
      ).certificateArn;

      new CfnOutput(this, "Certificate" + name, { value: certificateArn });

      // Specifies you want viewers to use HTTPS & TLS v1.1 to request your objects
      const viewerCertificate = ViewerCertificate.fromAcmCertificate(
        {
          certificateArn: certificateArn,
          env: {
            region: Aws.REGION,
            account: Aws.ACCOUNT_ID,
          },
          node: this.node,
          stack: parent,
          metricDaysToExpiry: () =>
            new Metric({
              namespace: "TLS Viewer Certificate Validity",
              metricName: "TLS Viewer Certificate Expired",
            }),
        },
        {
          sslMethod: SSLMethod.SNI,
          securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
          aliases: [domainName],
        }
      );

      // CloudFront distribution
      const distribution = new CloudFrontWebDistribution(
        this,
        "SiteDistribution" + name,
        {
          viewerCertificate,
          originConfigs: [
            {
              s3OriginSource: {
                s3BucketSource: siteBucket,
                originAccessIdentity: cloudfrontOAI,
              },
              behaviors: [
                {
                  isDefaultBehavior: true,
                  compress: true,
                  allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
                },
              ],
            },
          ],
        }
      );
      new CfnOutput(this, "DistributionId" + name, {
        value: distribution.distributionId,
      });

      // Route53 alias record for the CloudFront distribution
      new ARecord(this, "SiteAliasRecord" + name, {
        recordName: domainName,
        target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        zone,
      });

      // Deploy site contents to S3 bucket
      new BucketDeployment(this, "DeployWithInvalidation" + name, {
        sources: [Source.asset("./build")],
        destinationBucket: siteBucket,
        distribution,
        distributionPaths: ["/*"],
      });

      new HttpsRedirect(this, "RedirectWWW" + name, {
        recordNames: [`www.${domainName}`],
        targetDomain: domainName,
        zone,
        zone,
      });
    });
  }
}
