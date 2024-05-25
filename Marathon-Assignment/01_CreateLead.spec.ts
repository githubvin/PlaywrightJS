/**
 * 
 * Test Case Name: Verify Lead Creation and Conversion to Opportunity
Objective: Ensure that a user can successfully create a new lead and convert that lead to an opportunity.
User Credentials:
Username: hari.radhakrishnan@qeagle.com
Password: Leaf$1234 

Here Credentials will be different 
 */ 

import { test, chromium } from "@playwright/test"; 

test(`To Verify Lead Creation and Conversion to Opportunity`, async()=> {

    // Creating new browser context and page 
    const browser = await chromium.launch(); 
    const brContext = await browser.newContext(); 
    const page = await brContext.newPage(); 

    // Launching the application Url  
    await page.goto("https://login.salesforce.com/"); 

    // Login with credentials 
    await page.locator("#username").fill("vinothksc@gmail.com"); 
    await page.locator("#password").fill("Salesforce*1"); 
    await page.locator("#Login").click(); 

    // Adding code here to close the floating tour panel popup 
    await page.waitForTimeout(10000); 
    const dashFloatingPanel = await page.getByText("Prepare for the new Setup domain"); 
    console.log(dashFloatingPanel); 
    

    // Adding assertion here to ensure the landing page loaded correctly. 





})

