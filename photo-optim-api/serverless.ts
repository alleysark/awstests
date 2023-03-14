import type { AWS } from "@serverless/typescript";

const config: AWS = {
  service: "photo-optim-api",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    stage: "dev",
    region: "ap-northeast-2",
    httpApi: {
      // API Gateway 지표를 활성화한다.
      metrics: true,
    }
  },
  functions: {
    optimizeAndUpload: {
      handler: "handler.optimizeAndUpload",
      events: [
        {
          httpApi: {
            path: "/optimizeAndUpload",
            method: "put"
          }
        }
      ]
    }
  },
  plugins: [
    "serverless-webpack",
    "serverless-plugin-scripts"
  ],
  custom: {
    scripts: {
      hooks: {
        "webpack:package:packageModules": "cp ./testscript.sh .webpack/service",
      }
    }
  }
};

export = config;