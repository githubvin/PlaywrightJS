/**
 * Learning Objective:
Learn to automate window using Playwright.
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Automate interactions with a webpage, focusing on window handling and navigating between them using Playwright
Preconditions:
- Use page fixture
- Load the URL (https://login.salesforce.com/)
- Enter the username and password
Assignment Requirements:
- Click on the "Learn More” button under Mobile Publisher
- Capture the title of the new window that opens
- Click the ‘Confirm’ button on the page
- Assert the title and url of the page
Hints to Solve:
- Handle the windows using Promise.all and waitForEvent() method
Expected Outcome:
Upon completion, you should be able to: - Automate interactions involving window handling, navigate between windows, and interact with web elements on the page using Playwright
 */ 


import {expect, test} from "@playwright/test"; 

test(`To handle the webpage, window focusing and navigating between them`, async({page, context})=> {

    // Launching application 
    await page.goto("https://login.salesforce.com/"); 

    // Entering login credentials and landing on to the home page 
    await page.locator("#username").fill("vinothksc@gmail.com"); 
    await page.locator("#password").fill("Salesforce*1"); 
    await page.locator("#Login").click(); 
    await page.waitForTimeout(3000); 

    // Click on the "Learn More” button under Mobile Publisher - doing by event handler 
    const [newWindow] = await Promise.all([ 
        context.waitForEvent("page"), 
        page.locator("//span[contains(text(),': Mobile Publisher')]/parent::button").click()

    ])

    // Capture the title of the new window that opens  
    const newWindowTitle = await newWindow.title(); 
    console.log(`Title of the new window is ${newWindowTitle}`);
    


    // Click the ‘Confirm’ button on the page 
    await newWindow.locator("button",{hasText:"Confirm"}).click(); 


    // Assert the title and url of the page - asserting after the confirm click 
    await expect(newWindow).toHaveURL("https://www.salesforce.com/products/platform/products/mysalesforce/"); 

    await expect(newWindow).toHaveTitle("Create and Publish Custom-Branded Mobile Apps - Salesforce.com"); 


})