import { by, device, expect, element } from "detox";
// @ts-ignore
import { reloadApp } from "detox-expo-helpers";

describe("Welcome and Home", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await reloadApp();
  });

  it("should start with the Welcome screen", async () => {
    await expect(element(by.id("welcome"))).toExist();
    await expect(element(by.id("welcome"))).toBeVisible();
    await expect(element(by.text("Enter any year"))).not.toBeVisible();
  });

  it("should show Home screen after tap on start button", async () => {
    await element(by.id("startButton")).tap();
    await expect(element(by.text("Enter any year"))).toBeVisible();
    await expect(element(by.text("????"))).toBeVisible();
  });
});
