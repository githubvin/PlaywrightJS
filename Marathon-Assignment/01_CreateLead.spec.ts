/**
 * 
 * Test Case Name: Verify Lead Creation and Conversion to Opportunity
Objective: Ensure that a user can successfully create a new lead and convert that lead to an opportunity.
 */ 

import { test,chromium } from "@playwright/test"; 

test(`To Verify Lead Creation and Conversion to Opportunity`, async()=> {

    // Creating a Browser and Context with pages 
    // Running the test in Chrome browser 
    const browser = await chromium.launch({channel: 'chrome'}); 
    const brContext = await browser.newContext(); 
    const page = await brContext.newPage(); 

    // Launching the application URL in the browser 
    await page.goto("https://login.salesforce.com/"); 

    // Entering login credentials and landing on to the home page 
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
    
    // Click on the App Launcher toggle button 
    await page.locator(".slds-icon-waffle").click(); 

    // Click on the View All link 
    await page.locator("//button[text()='View All']").click(); 

    // Type ‘Marketing’ in the search box and click on the Marketing link 
    await page.locator("//h2[text()='App Launcher']/parent::div//input[@type='search']").fill("Marketing"); 
    await page.locator("//mark[text()='Marketing']").click(); 

    // Adding assertion to check Marketing page is loaded 
    let marketingLandingText = await page.locator("//div[@class='slds-context-bar']//span[text()='Marketing CRM Classic']").textContent(); 
    if (marketingLandingText) {
        console.log("Landed on Marketing page.") 
    } else {
        console.log("Marketing page is not loaded.")
    } 

    // Navigate to the Leads tab from the Marketing dashboard 
    await page.locator("//a//span[text()='Leads']").click(); 

    // Confirming Leads page is loaded 
    let leadsLanding = page.locator("//p[text()='Leads']"); 
    if (leadsLanding) {
        console.log("Landed on Leads page.")
    } else {
        console.log("Leads page is not loaded.")
    } 

    // Click on the New button to create a lead --- 
    // await page.locator("//button[text()='New']").click(); 
    // await page.locator("[text='New']").click(); // CSS not working 
    // await page.locator("button:text-is('New')").click();  // playwright locator 
    // await page.locator("button:has-text('New')") // another way of playwright locator 
    // await page.locator("//button[contains(text(),'List View')]").click(); // clicking List view 
    await page.locator("//div[contains(text(),'New')]").click(); //clicking New 

    // Assertion for New Lead modal dialog display 
    let newLeadDialog = await page.locator("//div[@class='slds-modal__header']/h2[text()='New Lead']").textContent(); 
    if (newLeadDialog) {
        console.log("New Lead modal window is opened.")
    } else {
        console.log("Modal window is not opened.")
    } 

    // Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data. 
    await page.locator("//button[@name='salutation']/span").click(); //clicking the salutation dropdown   
    await page.locator("//span[text()='Ms.']").click(); //clicking the salutation option from the dropdown values 

    // Declaring a variable for Lead name so that it is reused in the following lines. 
    //Using variables for the inputs so that this can be reused in Opportunity update and search 
    let leadFirstName = "Sharon"; 
    let leadLastName = "Leonard"; 
    let companyName = "Royal Gas";
    
    await page.locator("//input[@name='firstName']").fill(leadFirstName); 
    await page.locator("//input[@name='lastName']").fill(leadLastName); 
    await page.locator("//input[@name='Company']").fill(companyName); 
    
    // Click on the Save button 
    await page.locator("//button[@name='SaveEdit']").click(); 

    // Verifying the confirmation message here 
    let leadSaveSuccessfloater = page.locator("//span[contains(text(),'Lead was saved')]"); 
    if (leadSaveSuccessfloater) {
        console.log("New Lead details are saved successfully.")
    } else {
        console.log("Lead details are not save.")
    } 


    // In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link. 
    await page.locator("//button[@name='Submit']/ancestor::li/following-sibling::li//button").click(); 
    // await page.locator("span:has-text('Convert')").click(); //Using playwright locator 
    await page.locator("//span[text()='Convert']").click(); 

    // Adding assertion to check the convert lead popup window is opened 
    let convertLeadDialog = page.locator("//h2[contains(text(),'Convert Lead')]"); 
    if (convertLeadDialog) {
        console.log("Convert Lead popup is displayed.")
    } else {
        console.log("Convert popup is not shown.");
    } 

    // Click on the Opportunity Name input field, clear and enter a new opportunity name. 
    await page.locator("//span[text()='Opportunity']/ancestor::div/following-sibling::div//button[contains(@class,'transparentButton')]").click(); 

    // Clearing the text and entering new opportunity name 
    await page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input").clear(); 
    let newOpportunityName = companyName + leadFirstName + leadLastName; // will be reused in search 
    await page.locator("//span[text()='Opportunity Name']/parent::label/following-sibling::input").fill(newOpportunityName);

    // Click on the Convert button 
    await page.locator("//button[text()='Convert']").click(); 

    // Confirming the lead conversion 
    let leadConversionConfirm = page.locator("//h2[contains(text(),'Your lead has been converted')]"); 
    if (leadConversionConfirm) {
         console.log("Lead conversion confirmed.");
    } else {
        console.log("Lead conversion message is not displayed.");
    }

    // Click on the Go to Leads button 
    await page.locator("//button[contains(text(),'Go to Leads')]").click();


    // Search the verified lead name in the Search box and verify the text ‘No items to display’. 
    await page.locator("//input[@name='Lead-search-input']").fill(leadFirstName+leadLastName); 
    await page.locator("//input[@name='Lead-search-input']").press('Enter'); 
    await page.waitForTimeout(7000); 

    //Verifying No items display message. 
    let noItemsMsg = page.locator("//span[text()='No items to display.']"); 
    if (noItemsMsg) {
        console.log("No Results found message is displayed.");
    } else {
        console.log("Expected message is not found.");
    }

    // Navigate to the Opportunities tab and search for the opportunity linked with the converted lead. 
    await page.locator("//span[text()='Opportunities']").click(); 

  
    // Search the opportunity name created and click on the created opportunity name. 
    await page.locator("//input[@name='Opportunity-search-input']").fill(newOpportunityName); //Resusing the updated opportunity name 
    await page.locator("//input[@name='Opportunity-search-input']").press('Enter'); 

    // Regular expression used in this locator to click on the created opportunity name 
    await page.locator("//a[@title='"+newOpportunityName+"']").click(); 

    let opportunityLanding = page.locator("//lightning-formatted-text[text()='"+newOpportunityName+"']"); 
    if (opportunityLanding) {
        console.log("Landed on created Opportunity page.") 
    } else {
        console.log("Opportunity page is not found.");
        
    }
}) 

