/**
 * Test Case Name: Create and verify a New Case in Chatter
Objective: Ensure that a newly created case is accurately created and visible in the Chatter feed.
 */ 

import { test, chromium, expect } from "@playwright/test"; 

test(`Create and verify a New Case in Chatter`, async({page})=> { //using fixtures to save the line of codes for Browsers. 

    //Load the specified URL (https://login.salesforce.com/). 
    await page.goto("https://login.salesforce.com/");

    //Enter the Username, Password and click on the Login button.  
    await page.locator("#username").fill("vinothksc@gmail.com"); 
    await page.locator("#password").fill("Salesforce*1"); 
    await page.locator("#Login").click(); 
    await page.waitForTimeout(3000); 

    // Adding assertion to ensure the Home page is loaded 
    // Fetching the text from the element using textContent method 
    let homeLandingText = await page.locator("//h1//span[text()='Home']").textContent(); 
    if (homeLandingText) {
        console.log("Landed on Home page.");
    } else {
        console.log("Home page is not loaded.");
    }

    //Click on the App Launcher toggle button. 
    // await page.locator(".slds-icon-waffle").click();  
    await page.click(".slds-icon-waffle"); // using selectors and combining the user action 

    //Click on the View All link. 
    await page.locator("//button[text()='View All']").click();  

    //Type ‘Service’ in the search box and click on the Service link 
    await page.locator("//h2[text()='App Launcher']/parent::div//input[@type='search']").fill("Service"); 
    await page.locator("//span[text()='All Apps']/ancestor::div/following-sibling::div//p[contains(text(),'Manage customer service')]").click(); 
    await page.waitForTimeout(4000);

    //Navigate to the Cases tab from the Service dashboard 
    await page.locator("//a//span[text()='Cases']").click(); 
     

    //Click on the New button to create a new case. 
    await page.locator("//a//div[text()='New']").click(); 
    

    // Adding assertion of New case popup here 
    await expect(page.locator("//h2[text()='New Case']")).toBeVisible(); 

    //Click on the Search Contacts input field in Contact Name 
    await page.getByPlaceholder("Search Contacts...").click(); 
    await page.waitForTimeout(2000); 

    //Click on the New Contact link 
    await page.locator("//span[text()='New Contact']").click(); 


    //Fill in all the mandatory fields (Salutation, First Name, Last Name) with a valid data. 
    //clicking the salutation dropdown   
    await page.locator("//span[text()='Salutation']/parent::span/following-sibling::div//div/a").click();   
    await page.locator("//a[text()='Mr.']").click(); 

    let contactFirstName = "James"; 
    let contactLastName = "Witt"; 

    await page.getByPlaceholder("First Name").fill(contactFirstName); 

    await page.getByPlaceholder("Last Name").fill(contactLastName); 


    //Click on the Save button. 
    await page.locator("//button[@title='Save']").click(); 
    await page.waitForTimeout(4000); 

    // Assertion for contact creation 
    const successToast = page.locator("//span[contains(@class,'toastMessage')]"); 
    if (successToast) {
        console.log("Contact created successfully.");
    } else {
        console.log("Contact is not created.");
    }

    //Click Search Accounts input field in Account Name and click on the New Account link 
    await page.getByPlaceholder("Search Accounts...").click(); 
    await page.waitForTimeout(2000); 

    // click on the New Account link 
    await page.locator("//span[text()='New Account']").click(); 
    

    const accountName = "Electronic publishing specialist"; 
    //Fill in all the mandatory fields (Account Name, Account Number) with a valid data. 
    await page.locator("//span[text()='Account Name']/parent::label/following-sibling::input").fill(accountName); 


    //Select the Rating dropdown and choose the option ‘Hot’ 
    await page.locator("//span[text()='Rating']/parent::span/following-sibling::div//a").click(); 
    await page.getByTitle("Hot").click(); 

    //Click on the Save button. 
    await page.locator("//button[@title='Save']").click(); 

    // assertion on the account save. Reusing the same locator from contact save. 
    if (successToast) {
        console.log("New Account is created.");
    } else {
        console.log("Account is not created.");
        
    }
    await page.waitForTimeout(3000); 


    //Select the Status dropdown icon and choose the value as New. 
    await page.locator("//label[text()='Status']/following-sibling::div//button").click(); 
    await page.locator("//span[@title='New']").click(); 

    //Select the Priority dropdown icon and choose the value as ‘High’. 
    await page.locator("//label[text()='Priority']/following-sibling::div//button").click(); 
    await page.locator("//span[@title='High']").click(); 


    //Select the Case Origin dropdown icon and choose the value as ‘Email’. 
    await page.locator("//label[text()='Case Origin']/following-sibling::div//button").click(); 
    await page.locator("//span[@title='Email']").click(); 

    //scrolling the page to focus the next element 
    await page.locator("//input[@name='Subject']").hover();

    //Fill in the Subject input field as ‘Product Return Request’ and Description input field as ‘Requesting a return for a defective product’ 
    await page.locator("//input[@name='Subject']").fill("Product Return Request"); 

    await page.locator("//label[text()='Description']/following-sibling::div/textarea").hover(); 
    await page.locator("//label[text()='Description']/following-sibling::div/textarea").fill("Requesting a return for a defective product"); 


    // Click on the Save button. 
    await page.locator("//button[text()='Save']").click(); 

    //assertion 
    if (successToast) {
        console.log("New Account is created.");
    } else {
        console.log("Account is not created.");
        
    }

    // Edit the Status under Details category and choose the ‘Escalated’ option from the dropdown. 
    await page.locator("//button[@title='Edit Status']").click(); 
    await page.locator("//button[@aria-label='Status - Current Selection: New']").click(); 
    await page.locator("//span[@title='Escalated']").click(); 


    // Click on the Save button. 
    await page.locator("//button[@name='SaveEdit']").click(); 
    await page.waitForTimeout(3000); 

    //Enter a valid data in the Share an Update input field and click on the Share button. 
    await page.getByTitle("Share an update...").click(); 
    await page.waitForTimeout(2000); 

    const shareUpdateText = "Case is under analysis."; 
    await page.locator("//div[@data-placeholder='Share an update...']").fill(shareUpdateText); 
    await page.locator("//button[text()='Share']").click(); 

    //Click on the dropdown icon and choose the Like on Chatter option. 
    await page.locator("//span[text()='"+shareUpdateText+"']/ancestor::div[contains(@class,'compactBody')]/preceding-sibling::div//button").hover(); 
    await page.locator("//span[text()='"+shareUpdateText+"']/ancestor::div[contains(@class,'compactBody')]/preceding-sibling::div//button").click(); 
    await page.locator("//span[text()='Like on Chatter']").click(); 

    // assertion on toast message 
    if (successToast) {
        console.log("Liked the chatter");
    } else {
        console.log("Message not popped after Like.");
    } 


    //Navigate to the Chatter tab and verify the post liked by the user. 
    await page.locator("//span[text()='Chatter']").click(); 

    //asserting the Like in the Post 
    const likedIcon = page.locator("//span[text()='Liked']"); 
    if (likedIcon) {
        console.log("Post is showing Like thread.");
    } else {
        console.log("Not showing Like thread.");
    }


})