/** 
 * 
 * Learning Objective:
Develop skills to implement and verify button functionalities using assertions in automated testing with Playwright.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Create a script using Playwright to interact with buttons on the LeafGround "Button" page, asserting their properties and behaviors like visibility, disablement status, position, and color change on actions.
Assignment Requirements:
1. Navigate to https://leafground.com/button.xhtml
2. Write a script to click the button and confirm a title change or any visible response.
3. Assert the disabled state of a button.
4. Click the Image button and click on any hidden button
5. Check how many rounded buttons are present
Expected Outcome:
Upon completion, you should be able to:
- Successfully automate the testing of button functionalities on the LeafGround page, demonstrating proficiency in using assertions to validate UI components' behavior and properties. 
 */ 

import { expect, test } from "@playwright/test"; 

test(`Button interaction practice test`, async({page})=> {

    // launcing the application 
    await page.goto("https://leafground.com/button.xhtml"); 

    // Write a script to click the button and confirm a title change or any visible response. 
    const titleBeforeClick = await page.title(); 
    console.log(`Title of the page before button click is ${titleBeforeClick}`);
    
    const buttonCard = page.locator(".card").filter({hasText: "Click and Confirm title."}); 
    const targetButton = buttonCard.getByRole("button").filter({hasText: "Click"}); 

    // clicking the button 
    await targetButton.click(); 
    await page.waitForTimeout(2000); 
    
    const titleAfterClick = await page.title(); 
    console.log(`Title after click is ${titleAfterClick}`);
    

    // confirming the visible changes. 
    if (titleBeforeClick != titleAfterClick) {
        console.log(`Title of the page is changed.`); 
        page.goBack(); // Navigating to the previous button page. 
    }

    // Assert the disabled state of a button. Chaining is used here. 
    const disableButton = page.locator(".card").filter({hasText: "Confirm if the button is disabled."})
                            .getByRole("button").filter({hasText: "Disabled"}); 
    await expect(disableButton).toBeDisabled(); 

    // // Click the Image button and click on any hidden button. Chaining used. 
    // // await page.locator(".card ui-fluid").filter({hasText: "Click Image Button and Click on any hidden button"}).getByRole("button").filter({hasText:"Image"}).click(); 
    // await page.locator("//span[text()='Image']").click(); 
    // // After clicking the Image button now clicking one of the hidden button. 
    // await page.getByRole("button").filter({hasText:"Primary"}).click(); //since it is hidden it is keeping retrying to click in runtime. 
    // console.log(Hidden button is clicked.);


    // Check how many rounded buttons are present 
    const roundButtons = page.locator(".card").filter({hasText: "How many rounded buttons are there?"})
                            .getByRole("button"); 
    const totalRoundButtons = await roundButtons.count(); 
    console.log(`No. of round buttons is ${totalRoundButtons}`);


})