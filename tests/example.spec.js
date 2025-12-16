// @ts-check
import { test, expect } from "@playwright/test";

test("Check basic", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");

  await page.locator("#username").fill("practice");
  await page.locator("#password").fill("SuperSecretPassword!");
  await page.locator("#submit-login").click();

  await page.waitForTimeout(5000);
});
