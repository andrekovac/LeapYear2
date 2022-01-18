const { reloadApp } = require("detox-expo-helpers");

import { by, device, expect, element, waitFor } from "detox";

describe("Example", () => {
  // beforeAll(async () => {
  //   await device.launchApp();
  // });

  beforeEach(async () => {
    // console.log("Hello world");
    await reloadApp();
  });

  // it("should contain a text node", async () => {
  //   await expect(element(by.label("Text")).atIndex(0)).toBeVisible();
  // });

  test("should have welcome screen", async () => {
    const e = element(by.id("welcome"));
    // await expect(e).toExist();
    // await expect(element(by.id("welcome"))).toBeVisible();
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
