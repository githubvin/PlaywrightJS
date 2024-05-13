/**
 * 
 * Assignment Details: Your task is to print the title and url of a web page using Playwright. 
 * Precondition: 
 * - Launch Chromium in non-headless mode 
 * - Create a new browser context. 
 * - Open a new page within the browser context. 
 * - Load the url https://login.salesforce.com/ 
 * - Use your Salesforce credentials that you’ve created Requirements: 
 * - Enter the username. 
 * - Enter the password. 
 * - Click the Login button. 
 * - Wait for 10 seconds 
 * - Print the page title and the current url of the page 
 * - Close the browser
 */ 

//Importing the necessary protocols 
import { test, chromium } from "@playwright/test"; 

// Creating a test function for login salesforce 
test(`To login salesforce application and print URL and Title of the page`, async()=>{

    // Creating a browser and context 
    const chromeBrowser = await chromium.launch(); 
    const chromeContext = await chromeBrowser.newContext(); 
    const chromePage = await chromeContext.newPage(); 

    // Launching the salesforce login page 
    await chromePage.goto("https://login.salesforce.com/"); 

    // Entering username by using CSS locator 
    await chromePage.locator("#username").fill("vinothksc@gmail.com"); 
    
    // Entering password by using CSS locator 
    await chromePage.locator("#password").fill("Salesforce*1"); 

    // Click login button 
    await chromePage.locator("#Login").click(); 

    // Giving wait time for 10 seconds 
    await chromePage.waitForTimeout(10000); 


    // Printing the current page title 
    console.log(`Current page title is ${await chromePage.title()}`);
    
    // Printing the current URL 
    console.log(`Current page URL is ${await chromePage.url()}`);
    
    // Closing the context and browser 
    await chromePage.close(); 
    await chromeContext.close(); 
    await chromeBrowser.close(); 


})

