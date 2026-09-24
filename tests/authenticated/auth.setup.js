import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/LoginPage.po';
import HomePage from '../../pages/HomePage.po';
import AutomationAPI from '../../helpers/AutomationAPI';
import user from '../../test-data/user';
import fs from 'fs';



test("Auth setup", async({page, request})=> {
    const loginPage = new LoginPage(page);
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

    await expect(loginPage.headingTextLogin).toBeVisible();
    await loginPage.emailLoginField.fill(uniqueEmail);
    await loginPage.passwordLoginField.fill(user.password);
    await loginPage.loginButton.click();
    await expect(page).toHaveURL('/');
    await expect(homePage.textLoggedIn).toContainText(uniqueUsername);

    await page.context().storageState({
    path: 'playwright/.auth/user.json'
    })


    fs.writeFileSync(
        'playwright/.auth/user-data.json',
        JSON.stringify({email: uniqueEmail})    //from JS object to string in JSON
    )
})