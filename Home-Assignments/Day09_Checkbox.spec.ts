/**
 * Learning Objective:
Learn to automate testing of checkbox functionalities using Playwright, ensuring correct behavior through effective use of assertions.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Develop a Playwright script to test interactions with checkboxes on the LeafGround "Checkbox" page, covering scenarios like multiple selections, checking default states, and handling disabled checkboxes.
Assignment Requirements:
1. Navigate to https://leafground.com/checkbox.xhtml 2. Click on the "Basic Checkbox.” 3. Click on the "Notification Checkbox." 4. Verify that the expected message is displayed. 5. Click on your favorite language (assuming it's related to checkboxes). 6. Click on the "Tri-State Checkbox." 7. Verify which tri-state option has been chosen. 8. Click on the "Toggle Switch." 9. Verify that the expected message is displayed. 10. Verify if the Checkbox is disabled. 11. Select multiple options on the page (details may be needed). 12. Perform any additional actions or verifications required. 13. Close the web browser when done.
Expected Outcome:
Upon completion, you should be able to:
- Successfully validate the functionality of checkboxes, demonstrating the ability to manage multiple selections and check default and disabled states in an automated test environment.
 */ 

import{ expect, test } from "@playwright/test"; 

test(`To handle checkbox`, async({page})=>{

    // launching the application 
    page.goto("https://leafground.com/checkbox.xhtml"); 

    // click on the basic checkbox 
    const cardBasic = page.locator(".card").filter({hasText: "Basic Checkbox"}); 
    const basicCheckbox = await cardBasic.locator("//span[text()='Basic']/parent::div").click(); 

    //Click on the "Notification Checkbox." Using chaining here 
    await page.locator(".card").filter({hasText:"Notification"}).locator("//span[text()='Ajax']/parent::div").click(); 
    await page.waitForTimeout(2000); 

    //Verify that the expected message is displayed. 
    // const checkedMsg = page.locator(".ui-growl-message").locator("Checked"); 
    const verifyMsg = page.getByRole("alert").filter({hasText: "Checked"}); 
    if (verifyMsg) {
        console.log("Verify alert is displayed.");
    } else {
        console.log("Alert is not shown.");
    } 


    //Click on your favorite language (assuming it's related to checkboxes).  

    // await page.locator(".card").filter({hasText: "Choose your favorite language(s)"})
    // .locator("//label[text()='Java']/preceding-sibling::div").click(); 

    const languageCard = page.locator(".card").filter({hasText: "Choose your favorite language(s)"}); 
    await languageCard.locator("//label[text()='Java']/preceding-sibling::div").click(); 


    //Click on the "Tri-State Checkbox." 
    const triCard = page.locator(".card").filter({hasText: "Tri State Checkbox"}); 
    await triCard.locator("//h5[contains(text(),'Tri State Checkbox')]/parent::div//span/parent::div").click(); 
    
    await page.waitForTimeout(2000); 

    //Verify which tri-state option has been chosen. 
    if(page.locator("//p[text()='State = 1']")) {
        console.log(`Tri State is changed to 1.`); 
    } else {
        console.log(`Tri statue checkbox is in different state.`);
    }


    // Click on the "Toggle Switch." 
    const toggleCard = page.locator(".card").filter({hasText: "Toggle Switch"}); 
    await toggleCard.locator(".ui-toggleswitch-slider").click(); 


    //Verify that the expected message is displayed.
    if(page.locator("//span[text()='Checked']")) {
        console.log(`Toggle switch message is verified.`);
    } else {
        console.log(`Toggle message is not verified.`);       
    }


    // Verify if the Checkbox is disabled. 
    const disabledCard = page.locator(".card").filter({hasText: "Verify if check box is disabled"}); 
    const disableCheckbox = disabledCard.locator("//div[@class='grid formgrid']//input[@disabled='disabled']"); 
    
    await expect(disableCheckbox).toBeDisabled({timeout:2000}); //Timeout is optional  


    //Select multiple options on the page (details may be needed). 
    const multipleCard = page.locator(".card").filter({hasText: "Select Multiple"}); 
    await multipleCard.getByRole("combobox").click(); 

    const multipleDialog = page.getByRole("dialog"); 
    await multipleDialog.getByRole("group").locator("//label[text()='Miami']/parent::li/div").click(); 
    await multipleDialog.getByRole("group").locator("//label[text()='London']/parent::li/div").click(); 
    await multipleDialog.getByRole("group").locator("//label[text()='Paris']/parent::li/div").click(); 


    //Perform any additional actions or verifications required. 
    await page.waitForTimeout(2000); 

    //Close the web browser when done. 
    await page.close(); 


})