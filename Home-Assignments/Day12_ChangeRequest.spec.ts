/**
 * Learning Objective:
Learn API integration and lifecycle management of a change request using Playwright for automated testing and validation.
Expected Completion Time:
Best Case: 15 minutes
Average Case: 20 minutes
Assignment Details:
Integrate and automate the creation, retrieval, update, and deletion of a change request using Playwright for API testing.
Preconditions:
Endpoint URL: https://{your-service-now-instance}/api/now/table/change_request
Assignment Requirements:
Using API Integration
1. Create a new change_request and get the status code and response body
2. Retrieve the newly created change request
3. Modify "short_description" for the newly created change request using put/patch and assert it using the playwright library
4. Delete the newly created change request using Delete and verify the status code
Hints to Solve:
Execute POST, GET, PUT/PATCH, and DELETE requests, handling authentication and response validation.
Expected Outcome:
Upon completion, you should be able to: - Automate and validate the change request via API using Playwright, demonstrating an understanding of HTTP methods and response handling.
 */ 




import {  expect, test } from "@playwright/test"; 


// Declaring some class level variable so that it can be used across all the tests inside this file. 

let changeReqId: any; 
let auth = "Basic YWRtaW46SCFSYmNXN2l4NEgh"; 
let baseUrl = "https://dev204902.service-now.com"; 

test(`To create a new change request in snow`, async({request})=>{

    const postRes = await request.post(`${baseUrl}/api/now/table/change_request`, 

        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": auth // snow pwd is encoded here 
            }, 
            data: {
                "short_description": "Trial Change Request created from Playwright"
            }
        }
    ); 

    // accessing the response 
    const resBody = await postRes.json(); 
    console.log(resBody);
    
    // // Parsing the text response into Json 
    // const parsedRes = JSON.parse(resBody); 

    // Getting and asserting the status code 
    const statusCode = postRes.status();  
    console.log(`Status code is ${statusCode}`); 
    expect(statusCode, `Expecting code 201`).toBe(201); 
    
    // Now storing the change request sys id in the variable 
    changeReqId = resBody.result.sys_id; 
    

}) 

test(`To get the existing change request`, async({request})=> {

    const getRes = await request.get(`${baseUrl}/api/now/table/change_request/${changeReqId}`, 
        
        { 
            headers: {
                "Content-Type": "application/json", 
                "Authorization": auth // snow pwd is encoded here 
            }
    });  

    // Reading json response 
    const resBody = await getRes.json(); 
    console.log(resBody); 

    const statusCode = getRes.status(); 
    console.log(`Status code is ${statusCode}`);
    
    // Assertion 
    expect(statusCode, `Code should be 200`).toBe(200); 

}) 


test(`To update the existing change request`, async({request})=> {


    const updateRes = await request.patch(`${baseUrl}/api/now/table/change_request/${changeReqId}`, 
        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": auth // snow pwd is encoded here 
            }, 
            data: {
                "short_description": "Description updated via Playwright"
            }
        });

        const resBody = await updateRes.json(); 
        console.log(resBody);
        
        const statusCode = updateRes.status(); 
        console.log(statusCode); 
        expect(statusCode,`Expecting 200`).toBe(200); 

}) 


test(`To delete the existing change request in snow`, async({request})=>{

    const delRes = await request.delete(`${baseUrl}/api/now/table/change_request/${changeReqId}`, 
        {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": auth // snow pwd is encoded here 
            }
        }
    ); 

    const statusCode = delRes.status(); 
    console.log(`Status code is ${statusCode}`); 
    expect(statusCode, `Expecting 204`).toBe(204); 
    

})