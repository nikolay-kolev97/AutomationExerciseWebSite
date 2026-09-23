import {test as base, expect} from '@playwright/test'
import HomePage from '../pages/HomePage.po';
import AutomationAPI from '../helpers/AutomationAPI';
import user from '../test-data/user'

export const test = base.extend({
    loginResource: async({page, request}, use)=>{
        const homePage = new HomePage(page);
        const api = new AutomationAPI(request);
       
        let uniqueUsername = `testUser_${Date.now()}`;
        let uniqueEmail = `test${Date.now()}@abv.bg`;

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
    }
})

export{expect}