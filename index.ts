import { StaticSite } from "./static-site";
import { Stack, StackProps, App } from "aws-cdk-lib";

class StaticSiteStack extends Stack {
  constructor(parent: App, name: string, props: StackProps) {
    super(parent, name, props);

    new StaticSite(this, "StaticSite");
  }
}

const app = new App();

new StaticSiteStack(app, "Homepage", {
  /**
   * This is required for our use of hosted-zone lookup.
   *
   * Lookups do not work at all without an explicit environment
   * specified; to use them, you must specify env.
   * @see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
   */
  env: {
    account: "503906830970",
    region: "us-east-1",
  },
});

app.synth();
