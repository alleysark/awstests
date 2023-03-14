import * as crypto from "crypto";
import * as fs from "fs";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import "source-map-support/register";

export const optimizeAndUpload: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.body || !event.isBase64Encoded) {
    return { statusCode: 400 };
  }

  const buffer = Buffer.from(event.body, "base64");
  const hash = crypto.createHash("md5").update(buffer).digest("hex");
  const filePath = `tmp/${hash}.jpg`;
  fs.writeFileSync(filePath, buffer);
  try {
    // optimize given photo

    return { cdnURL: "CDN-URL" };
  } finally {
    // clear temporary photo file
    fs.unlinkSync(filePath);
  }
};
