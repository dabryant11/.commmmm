import { Aws, RemovalPolicy, Stack } from "aws-cdk-lib";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";
import {
  CloudFrontAllowedMethods,
  CloudFrontWebDistribution,
  OriginProtocolPolicy,
  SecurityPolicyProtocol,
  SSLMethod,
  ViewerCertificate,
} from "aws-cdk-lib/aws-cloudfront";
import { Metric } from "aws-cdk-lib/aws-cloudwatch";
import { AnyPrincipal, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { HttpsRedirect } from "aws-cdk-lib/aws-route53-patterns";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

export class StaticSite extends Construct {
  constructor(scope: Stack, id: string) {
    super(scope, id);

    const appDomain = "darienbryant.com";

    const fullDomain = appDomain;

    const zone = HostedZone.fromLookup(this, "Zone", {
      domainName: appDomain,
    });

    // Content bucket
    const siteBucket = new Bucket(this, "SiteBucket", {
      bucketName: fullDomain,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      publicReadAccess: true,
    });

    // Grant access to cloudfront
    siteBucket.addToResourcePolicy(
      new PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [new AnyPrincipal()],
      })
    );

    // TLS certificate
    const certificateArn = new DnsValidatedCertificate(
      this,
      "SiteCertificate",
      {
        domainName: fullDomain,
        hostedZone: zone,
      }
    ).certificateArn;

    // Specifies you want viewers to use HTTPS & TLS v1.1 to request your objects
    const viewerCertificate = ViewerCertificate.fromAcmCertificate(
      {
        certificateArn: certificateArn,
        env: {
          region: Aws.REGION,
          account: Aws.ACCOUNT_ID,
        },
        node: this.node,
        stack: scope,
        applyRemovalPolicy: () => RemovalPolicy.DESTROY,
        metricDaysToExpiry: () =>
          new Metric({
            namespace: "TLS Viewer Certificate Validity",
            metricName: "TLS Viewer Certificate Expired",
          }),
      },
      {
        sslMethod: SSLMethod.SNI,
        securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
        aliases: [fullDomain],
      }
    );

    // CloudFront distribution
    const distribution = new CloudFrontWebDistribution(this, "Distribution", {
      viewerCertificate,
      originConfigs: [
        {
          customOriginSource: {
            domainName: siteBucket.bucketWebsiteDomainName,
            originProtocolPolicy: OriginProtocolPolicy.HTTP_ONLY,
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
    });

    new ARecord(this, "ARecord", {
      recordName: fullDomain,
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
      recordNames: [`www.${fullDomain}`],
      targetDomain: fullDomain,
      zone,
    });
  }
}
