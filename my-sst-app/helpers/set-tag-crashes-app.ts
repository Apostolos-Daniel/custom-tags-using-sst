var tracer: any;
  console.log(`not local`);
  tracer = require("dd-trace");
  tracer.init();

export const setTagCrashesApp = (tagName: string, tagValue: unknown) => {
  console.log(`process.env.IS_LOCAL=${process.env.IS_LOCAL}`);
  console.log(`process.env.LAMBDA_TASK_ROOT=${process.env.LAMBDA_TASK_ROOT}`);
  if (!process.env.IS_LOCAL && process.env.LAMBDA_TASK_ROOT !== undefined) {
    const span = tracer?.scope().active();

    if (!span) {
      throw new Error("Active span not available");
    }

    span.setTag(tagName, tagValue);
  }
};
