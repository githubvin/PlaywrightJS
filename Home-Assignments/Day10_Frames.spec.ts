/**
 * 
 * Learning Objective: Acquire the skills to identify, interact with, and manipulate iframes within web pages using Playwright. 
Expected Completion Time: Best Case: 15 minutes Average Case: 20 minutes Assignment 
Details: Your task is to interact with the web elements present inside iframes 
Precondition: 
- Launch Chromium in non-headless mode 
- Use required fixtures 
- Navigate to https://leafground.com/frame.xhtml Requirements: 
- Interact with the Click Me button inside frame 
- Assert the text changed after clicking the button 
- Get the total count of frames present in the page 
- Interact with the Click Me button present inside the nested frames 
- Assert the text changed after clicking the button 
Expected Outcome: Upon completion, you should be able to:
- Effectively handle and switch between frames using Playwright.
 */ 

import {expect, test} from "@playwright/test"; 

test(`To handle the frames inside a page`, async({page})=>{ 


     // Launch Chromium in non-headless mode - Use required fixtures 
     page.goto("https://leafground.com/frame.xhtml"); 

     // Interact with the Click Me button inside frame 
     const framecard = page.locator(".card").filter({hasText:"Click Me (Inside frame)"}); 
 
     const frame = framecard.frameLocator("iframe"); 
 
     await frame.locator("#Click").click(); 
 
     await page.waitForTimeout(3000); 
 
 
     // Assert the text changed after clicking the button 
     const changedBtn = frame.locator("#Click").getByText("Hurray! You Clicked Me.");  
     await expect(changedBtn).toBeVisible({timeout:3000}); 
 
 
     // Get the total count of frames present in the page 
      // Getting the frames details 
      const frames = page.frames(); 
      console.log(frames);
      
      // Getting frames count 
      const frameCount = frames.length; 
      console.log(frameCount);
 
 
     // Interact with the Click Me button present inside the nested frames 
     const nestedFrameCard = page.locator(".card").filter({hasText:"Click Me (Inside Nested frame)"}); 
 
     // Since the locator is placed in the nested frames we are diving into framees one by one 
     const firstFrame = nestedFrameCard.frameLocator("iframe"); 
     const secondFrame = firstFrame.frameLocator("#frame2"); 
 
     await secondFrame.locator("#Click").click(); 
 
     await page.waitForTimeout(2000);
 
     // Assert the text changed after clicking the button 
     const nestedBtn = secondFrame.locator("#Click").getByText("Hurray! You Clicked Me."); 
     await expect(nestedBtn).toBeVisible({timeout:3000}); 
 
 
})