/**
 * 
 * Learning Objective:
Learn the use of assertions in Playwright to verify the functionality and selections within select dropdown components on web applications.
Expected Completion Time:
Best Case: 20 min
Average Case: 30 min
Assignment Details:
Develop a Playwright script that interacts with and verifies the behavior of dropdowns. The script should handle tasks like validating the options available, checking correct selections, and asserting dynamic content loading based on selections.
Assignment Requirements:
1. Navigate to https://leafground.com/select.xhtml 2. Select your favorite UI automation tool using the different select options 3. Get the count and print of all the values 4. Choose your preferred Country
5. Confirm Cities belongs to Country is loaded 6. Choose any three courses from the dropdown 7. Choose a language and print all the values from the dropdown. 8. Select 'Two' irrespective of the language chosen
Expected Outcome:
Upon completion, you should be able to:
- Effectively demonstrate the use of assertions to validate the behaviors of select dropdowns, ensuring accurate selection processes and dynamic response in dropdown menus.

 */ 


import { expect, test } from "@playwright/test"; 

test(`To handle dropdown fields`, async({page})=> {


    // launching the application 
    page.goto("https://leafground.com/select.xhtml");  

    // Select your favorite UI automation tool using the different select options 
    const favToolCard = page.locator(".card").filter({hasText: "Which is your favorite UI Automation tool?"}); 
    await favToolCard.locator(".ui-selectonemenu").selectOption({label:"Selenium"});  


    // Get the count and print of all the values 
    const toolDropdown = favToolCard.locator(".ui-selectonemenu>option"); 
    const toolCount = await toolDropdown.count(); 
    console.log(`Tool count from the dropdown ${toolCount}`);
    
    for (let i = 0; i < toolCount; i++) {
        console.log(await toolDropdown.nth(i).innerText());
    }
    
    await page.waitForTimeout(3000); 

    // Choose your preferred Country 
    const preferCountry = page.locator(".card").filter({hasText: "Choose your preferred country."}); 
    await preferCountry.locator("//label[contains(@id,'country')]").click(); 
    await page.locator("//li[contains(text(),'Germany')]").click(); 

    await page.waitForTimeout(2000); 

    // Confirm Cities belongs to Country is loaded 
    const cityCard = page.locator(".card").filter({hasText: "Confirm Cities"}); 
    await cityCard.locator("//label[contains(@id,'city')]").click(); 

    const citySelect = page.locator("//li[contains(text(),'Berlin')]"); 
    await expect(citySelect).toBeVisible({timeout:2000}); 

    // After confirming the city clicking the city from the dropdown 
    await citySelect.click(); 


    // Choose any three courses from the dropdown 
    const courseCard = page.locator(".card").filter({hasText: "Choose the Course"}); 
    await courseCard.getByRole("button").click(); 

    await page.locator("//li[contains(text(),'Selenium')]").click(); //selecting first course 
    await page.waitForTimeout(2000); 

    await courseCard.getByRole("button").click();  
    await page.locator("//li[contains(text(),'Playwright')]").click() // selecting second course 
    await page.waitForTimeout(2000); 

    await courseCard.getByRole("button").click(); 
    await page.locator("//li[contains(text(),'Rest')]").click(); // selecting thrid course 
    await page.waitForTimeout(2000); 

    // Choose a language and print all the values from the dropdown. 
    const languageCard = page.locator(".card").filter({hasText: "Choose language randomly"}); 
    await languageCard.locator("//label[contains(@id,'lang')]").click(); 
    await page.locator("//li[contains(text(),'Telugu')]").click(); //selecting a language 

    await page.waitForTimeout(2000); 

    // Now printing all the values from the dropdown 
    const languageList = languageCard.locator("option"); 
    const langCount = await languageList.count(); 
    console.log(`Count of Languages is ${langCount}`);
    
    for (let i=0; i<langCount; i++) {
        console.log(await languageList.nth(i).innerText()); 
    }


    // Select 'Two' irrespective of the language chosen 
    const twoSelectCard = page.locator(".card").filter({hasText:"Select 'Two' irrespective of the language chosen"}); 
    // console.log(await twoSelectCard.locator("option").count());
    
    await twoSelectCard.locator("//label[contains(@id,'value_label')]").click(); 
    await page.locator("//*[@value='Two']").click(); //Not clicking at present
    

    await page.waitForTimeout(2000); 


})