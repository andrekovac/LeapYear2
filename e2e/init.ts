const detox = require("detox");

const config = require("../package.json").detox;

jest.setTimeout(15000);
beforeAll(async () => {
  await detox.init(config);
});
afterAll(async () => {
  await detox.cleanup();
});

// import { cleanup, init } from "detox";
// // tslint:disable-next-line:no-import-side-effect
// import "jasmine";
// import * as adapter from "detox/runners/jest/adapter";

// const config = require("../package.json").detox;

// jest.setTimeout(120000);
// jasmine.getEnv().addReporter(adapter);

// beforeAll(async () => {
//   await init(config);
// });

// beforeEach(async () => {
//   await adapter.beforeEach();
// });

// afterAll(async () => {
//   await adapter.afterAll();
//   await cleanup();
// });
