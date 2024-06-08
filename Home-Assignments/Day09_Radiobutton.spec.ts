/**
 * 
 * Learning Objective:
Gain proficiency in using Playwright to validate the behavior and state of radio buttons in automated web testing.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Write a Playwright script to automate the interaction with radio buttons on the LeafGround "Radio" page. The tasks will include checking default selections, enabling selections, and validating group exclusive selections.
Assignment Requirements:
1. Navigate to https://leafground.com/radio.xhtml
2. Identify and assert the default selected radio button.
3. Click your most favorite browser and assert that the browser is enabled.
4. Click one of the cities.
5. Select the age group. Assert the default selected button.
Expected Outcome:
Upon completion, you should be able to:
- Effectively automate the testing of radio button functionalities, demonstrating the ability to handle selection states and ensure proper behavior through assertions.
 */ 

import { expect, test } from "@playwright/test"; 

test(`To handle the Radio buttons`, async({page})=> {

    // Launching the application 
    page.goto("https://leafground.com/radio.xhtml"); 

    //Identify and assert the default selected radio button. 
    const defaultRadioCard = page.locator(".card").filter({hasText: "Select the age group. Assert the default selected button."}); 
    await expect(defaultRadioCard.locator("//label[text()='Safari']/preceding-sibling::div")).toBeTruthy(); 
    


    // Click your most favorite browser and assert that the browser is enabled. 
    const favBrowserCard = page.locator(".card").filter({hasText: "Your most favorite browser"}); 
    await favBrowserCard.locator("//label[text()='Chrome']/preceding-sibling::div").click(); 

    await page.waitForTimeout(2000); 

    // Click one of the cities. 
    const cityCard = page.locator(".card").filter({hasText:"UnSelectable"}); 
    await cityCard.locator("//label[text()='Bengaluru']/preceding-sibling::div").click(); 

    await page.waitForTimeout(2000); 

    // Select the age group. Assert the default selected button. 
    const ageCard = page.locator(".card").filter({hasText: "Select the age group (only if not selected)"}); 
    await expect(ageCard.locator("//label[text()='21-40 Years']/preceding-sibling::div")).toBeEnabled();


    // clicking the age group radio button. 
    await ageCard.locator("//label[text()='1-20 Years']/preceding-sibling::div").click(); 

})