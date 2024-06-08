/**
 * 
 * Learning Objective:
Learn to implement Playwright's auto-waiting features for handling dynamic content efficiently.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Create an assignment on implementing various wait strategies in Playwright to handle element visibility, invisibility, clickability, and text changes efficiently.
Assignment Requirements:
1. Navigate to https://leafground.com/waits.xhtml
2. Wait for an element to become visible before interacting with it.
3. Wait for an element to disappear from the page.
4. Wait for an element to become clickable.
5. Check for text changes within an element and respond accordingly.
6. Assert the various actions performed on the page.
Expected Outcome:
Upon completion, you should be able to:
- Successfully implement and demonstrate the use of various Playwright wait strategies to handle dynamic web elements under different conditions.
 */ 

import { expect, test } from "@playwright/test"; 

test(`To handle auto waits`, async({page})=> {

    // Launching the application 
    page.goto("https://leafground.com/waits.xhtml"); 

    // Wait for an element to become visible before interacting with it. 
    const visiblecard = page.locator(".card").filter({hasText:"Wait for Visibility (1 - 10 Sec)"}); 
    await visiblecard.getByRole("button").filter({hasText:"Click"}).click(); 
    await expect(visiblecard.getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:10000}); 


    // Wait for an element to disappear from the page.  
    const hidecard = page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"}); 
    await hidecard.getByRole("button").filter({hasText:"Click"}).click(); 
    await expect(hidecard.getByRole("button").filter({hasText:"I am about to hide"})).toBeHidden({timeout:10000}); 


    // Wait for an element to become clickable. 
    const clickablecard = page.locator(".card").filter({hasText:"Wait for Clickability"}); 
    await clickablecard.getByRole("button").filter({hasText:"Click First Button"}).click(); 
    await expect(clickablecard.getByRole("button").filter({hasText:"Click Second"})).toBeEnabled({timeout:10000}); 



    // Check for text changes within an element and respond accordingly. 
    const changecard = page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"}); 
    await changecard.getByRole("button").filter({hasText:"Click"}).click(); 
    await expect(changecard.getByRole("button").filter({hasText:"Did you notice?"})).toBeVisible({timeout:10000}); 


    // Assert the various actions performed on the page. 
    // Expect keyword is used in all the above actions to assert



})