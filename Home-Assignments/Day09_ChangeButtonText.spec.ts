

import { test, expect } from "@playwright/test"; 

test.only(`Auto-Waits for Changing Button`, async({page})=> {

    await page.goto("https://leafground.com/waits.xhtml"); 

    // using chaining method and clicking the button 
    await page.locator(".card").filter({hasText: "Wait for Text Change (1 - 10 Sec)"}).getByRole("button")
    .filter({hasText: "Click"}).click(); 

    // used chaining here to assert the changing text in the button 
    const changingButton = page.locator(".card").filter({hasText: "Wait for Text Change (1 - 10 Sec)"}).getByRole("button")
    .filter({hasText: "Did you notice?"}); 
    
    // await page.waitForTimeout(10000); 
    await expect(changingButton).toBeVisible({timeout:10000});  
    // await changingButton.innerText(); 
})