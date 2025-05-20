import { test, expect } from "@playwright/test";

test("Frame DragandDrop", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  //iframe
  const iframeElement = page.frameLocator(".demo-frame");
  //source and destination element
  const dragElement = iframeElement.locator("#draggable");
  const dropElement = iframeElement.locator("#droppable");
  //drag and drop element
  dragElement.dragTo(dropElement);
  await page.waitForTimeout(3000);
});
