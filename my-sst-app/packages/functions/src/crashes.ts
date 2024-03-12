import { setTagCrashesApp } from '../../../helpers/set-tag-crashes-app';
import { ApiHandler } from "sst/node/api";
import { datadog } from "datadog-lambda-js";

export const handler = datadog(ApiHandler(async (_evt) => {
  setTagCrashesApp('foo', 'bar');
  return {
    statusCode: 200,
    body: `Hello world. The time is ${new Date().toISOString()}`,
  };
}));
 