import {test as base, expect} from '@playwright/test'
import HomePage from '../pages/HomePage.po';
import AutomationAPI from '../helpers/AutomationAPI';
import user from '../test-data/user'

export const test = base.extend({
    // Go to registration page and create user. After that delete the user.
    loginResource: async({page, request}, use)=>{
        const homePage = new HomePage(page);
        const api = new AutomationAPI(request);
       
        let uniqueUsername = `testUser_${Date.now()}`;
        let uniqueEmail = `test${Date.now()}@abv.bg`;
        console.log("Test data for the test:")
        console.log("New username:",uniqueUsername);
        console.log("New email:",uniqueEmail)
       
        await page.goto('/');
        const consentButton = page.getByRole('button', { name: 'Consent' });
        try {
            await consentButton.click({ timeout: 3000 });
        } catch {
            // Consent popup is not shown in this environment
        } 
        await homePage.buttonSignUpOrLogin.click();
        await expect(page).toHaveURL(/login/);
        
        await use({
            uniqueEmail,
            uniqueUsername
        });

       //teardown - delete user
       const responseDeleteUser = await api.deleteUser(uniqueEmail, user.password);
       expect(responseDeleteUser.status()).toBe(200);
    },
    //API Create user and login
    createUser: async({request, page}, use)=> {
        const homePage = new HomePage(page);
        const api = new AutomationAPI(request);
       
        let uniqueUsername = `testUser_${Date.now()}`;
        let uniqueEmail = `test${Date.now()}@abv.bg`;
        console.log("Test data for the test:")
        console.log("New username:",uniqueUsername);
        console.log("New email:",uniqueEmail)
        const responseCreateUser = await api.createUser(uniqueUsername, uniqueEmail);
        expect(responseCreateUser.status()).toBe(200);
        const responseBodyCreateUser = await responseCreateUser.json();
        expect(responseBodyCreateUser.responseCode).toBe(201);
        expect(responseBodyCreateUser.message).toBe("User created!")

        await page.goto('/');
        const consentButton = page.getByRole('button', { name: 'Consent' });
        try {
            await consentButton.click({ timeout: 3000 });
        } catch {
            // Consent popup is not shown in this environment
        } 
        await homePage.buttonSignUpOrLogin.click();
        await expect(page).toHaveURL(/login/);
        
        await use({
            uniqueEmail,
            uniqueUsername
        });

        //teardown
        const responseDeleteUser = await api.deleteUser(uniqueEmail, user.password);
        expect(responseDeleteUser.status()).toBe(200);

    }
})

export{expect}