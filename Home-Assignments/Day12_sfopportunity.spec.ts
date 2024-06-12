/**
 * 
 * Learning Objective:
Learn to automate CRM operations and validate responses using Playwright, focusing on authentication, CRUD operations, and response assertion.
Expected Completion Time:
Best Case: 20 minutes
Average Case: 25 minutes
Assignment Details:
Automate CRM operations using Postman and Playwright: authenticate, manage opportunities, validate operations in Postman, and assert responses with Playwright.
Preconditions:
Endpoint URL for the access token generation: https://login.salesforce.com/services/oauth2/token
Endpoint URL for the Opportunity:
https://{your-salesforce-instance}/services/data/v59.0/sobjects/Opportunity
Assignment Requirements:
Using Postman and API Integration
1. Generate an access token and set the access token as a global variable
2. Create a new opportunity and set the opportunity ID as a global variable
3. Update the type dropdown to ‘New Customer’ and stage dropdown to ‘Prospecting’
4. Get all the opportunities in your instance
5. Delete the first record
6. Assert the different responses using Playwright
Hints to Solve:
Perform authentication, CRUD on opportunities, and assert responses in both Postman and Playwright.
Expected Outcome:
Upon completion, you should be able to: - Understand how to automate and validate CRM operations, demonstrating proficiency in using Postman for API calls and Playwright for testing and assertion.

 */ 


import { expect, test } from "@playwright/test"; 


// Declaring common variables here in class level 

let oppId: any; 
let baseUrl: any; // this will be fetched while generating token 
let token: any; 

test(`To generate token for working on other requests`, async({request})=> {

    // These variables will be used only for this particular request so it is decleared inside this test alone. 
    const url = "https://login.salesforce.com/services/oauth2/token"; 
    const clientId = "3MVG9WVXk15qiz1JgvboCv2ie0F7jP2JNfkW9r3YiKlgT2FEZK7OcOzJj4ZgShIOB7nnFnW7QvRQLoYISOCC."; 
    const clientSecret = "D530B75DEAD3DD413A817F1518351413A920CD30682CAD9FAFF4617C2855F310"; 
    const username = "vinothksc@gmail.com"; 
    const password = "Salesforce*1"; 
    const grantType = "password"; 

    const tokenRes = await request.post(url, 
        {
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
                "Connection": "keep-alive" // optional  
            }, 
            form: {
                "grant_type": grantType, 
                "client_id": clientId, 
                "client_secret": clientSecret, 
                "username": username, 
                "password": password
            }
        }
    ); 

    // Reading the response 
    const resBody = await tokenRes.json(); 
    console.log(resBody);
    
    // Assigning values to the class level variables 
    baseUrl = resBody.instance_url; 
    console.log(`Instance url is ${baseUrl}`);
    
    token = resBody.access_token; 
    console.log(`Token generated ${token}`);
    
}) 



test(`To create a new opportunity is sf`, async({request})=>{

    const oppRes = await request.post(`${baseUrl}/services/data/v58.0/sobjects/Opportunity`, 
        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`
            }, 
            data: {
                "name" : "Opportunity from Playwright",
                "stageName" : "Value Proposition", 
                "closeDate" : "2024-12-31"
            }
        }
    ); 

    const resBody = await oppRes.json(); 
    console.log(resBody); 

    oppId = resBody.id; // opportunity id assigned 

    const statusCode = oppRes.status();  
    console.log(statusCode);
    expect(statusCode, `Expecting 201`).toBe(201); 


}) 



test(`To fetch the existing opportunity`, async({request})=> {

    const getoppRes = await request.get(`${baseUrl}/services/data/v58.0/sobjects/Opportunity/${oppId}`, 
        {
            headers: {
                "Content-Type" : "application/json", 
                "Authorization" : `Bearer ${token}`
            }
        }
    ); 

    const resBody = await getoppRes.json(); 
    console.log(resBody);
    
    const statusCode = getoppRes.status(); 
    console.log(statusCode);
    expect(statusCode, `Expecting 200`).toBe(200); 

})



test(`To update the existing opportunity`, async({request})=>{

    const updateOppRes = await request.patch(`${baseUrl}/services/data/v58.0/sobjects/Opportunity/${oppId}`, 
        {
            headers: {
                "Content-Type" : "application/json", 
                "Authorization" : `Bearer ${token}`
            }, 
            data: {
                "stageName" : "Closed Won"
            }
        }
    ); 

    const text = updateOppRes.statusText(); 
    console.log(text);
    
    
    const statusCode = updateOppRes.status(); 
    console.log(statusCode);
    expect(statusCode, `Expecting 204`).toBe(204); 

}) 


test(`To delete the existing opportunity`, async({request})=> {

    const delOppRes = await request.delete(`${baseUrl}/services/data/v58.0/sobjects/Opportunity/${oppId}`, 
        {
            headers: {
                "Content-Type" : "application/json", 
                "Authorization" : `Bearer ${token}`
            } 
        }
    ); 

    const statusCode = delOppRes.status(); 
    console.log(statusCode);
    expect(statusCode, `Expecting 204`).toBe(204); 

})