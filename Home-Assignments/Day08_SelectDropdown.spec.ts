/**
 * Learning Objective:
Understand and apply the use of select dropdown menus in user interfaces to enable efficient, error-free selection of options from a predefined list.
Expected Completion Time:
Best Case: 15 min
Average Case: 20 min
Assignment Details:
Create a new lead filling the mandatory fields and select the values from the dropdowns using different select dropdown strategies.
Assignment Requirements:
1. Navigate to http://leaftaps.com/opentaps/control/main
2. Enter the username and password
3. Click Login
4. Click CRM/SFA
5. Click Leads
6. Click Create Leads
7. Fill all the mandatory fields such as Company name, First name and Last name
8. Select Direct Mail from the Source dropdown using label
9. Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
10. Get the count and print all the values in the Marketing Campaign dropdown
11. Select General Services from the Industry dropdown using index
12. Select INR from the Preferred Currency dropdown
13. Select India from the Country dropdown
14. Select any state from the State dropdown
15. Get the count of all states and print the values in the console
16. Click Create Lead
Expected Outcome:
Upon completion, you should be able to:
- Understand how to select values from a select dropdown
 */ 

import { test, chromium } from "@playwright/test"; 

test(`To handle the select dropdown values in the leaftaps portal`, async({page}) => { 

    // Adding fixtures page here and hence no browser or page is declared here 

    await page.goto("http://leaftaps.com/opentaps/control/main"); 

    // Entering login credentials using Selectors - writing the function within the same methods 
    await page.fill("#username", "demosalesmanager"); 
    await page.fill("#password", "crmsfa"); 
    await page.click(".decorativeSubmit"); 

    await page.waitForTimeout(3000); 

    // Click CRM/SFA 
    await page.click("text=CRM/SFA"); 

    // Click Leads 
    await page.click("text=Leads");  

    // click Create Lead 
    //using anchor tag and calling with inbuilt playwright locators
    await page.getByRole('link',{name: 'Create Lead'}).click(); 

    //Fill all the mandatory fields such as Company name, First name and Last name 
    await page.fill("#createLeadForm_companyName", "Little Tavern"); 
    await page.fill("#createLeadForm_firstName", "Susan"); 
    await page.fill("#createLeadForm_lastName", "Smallwood"); 

    //Select Direct Mail from the Source dropdown using label 
    await page.selectOption("#createLeadForm_dataSourceId", {label: "Direct Mail"}); 

    //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
    await page.selectOption("#createLeadForm_marketingCampaignId", {value: "DEMO_MKTG_CAMP"}); 

    //Get the count and print all the values in the Marketing Campaign dropdown 
    const marketingdropdown = page.locator("#createLeadForm_marketingCampaignId>option"); 
    const marketingcount = await marketingdropdown.count(); 
    console.log(`No. of values in Marketing dropdown is ${marketingcount}`); 

    for (let i = 0; i < marketingcount; i++) {
        console.log(await marketingdropdown.nth(i).innerText()); //using nth and inner text function 
    }

    //Select General Services from the Industry dropdown using index 
    await page.selectOption("#createLeadForm_industryEnumId", {index: 6}); 
    // await page.waitForTimeout(2000); 

    //Select INR from the Preferred Currency dropdown 
    await page.selectOption("#createLeadForm_currencyUomId", {value: "INR"}); 
    // await page.waitForTimeout(2000); 

    //Select India from the Country dropdown 
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label: "India"}); 
    // await page.waitForTimeout(2000); 

    //Select any state from the State dropdown 
    await page.selectOption("#createLeadForm_generalStateProvinceGeoId", {index: 16}); 
    // await page.waitForTimeout(2000);  

    //Get the count of all states and print the values in the console 
    const statedropdown = page.locator("#createLeadForm_generalStateProvinceGeoId>option") 
    const statecount = await statedropdown.count(); 
    console.log(`No. of States for India is ${statecount}`); 

    for (let j = 0; j < statecount; j++) {
        console.log(await statedropdown.nth(j).innerText());
        
    }
    

    //Click Create Lead
    await page.click(".smallSubmit");  
    await page.waitForTimeout(3000); 

})