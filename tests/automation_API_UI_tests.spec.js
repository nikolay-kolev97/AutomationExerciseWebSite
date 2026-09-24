import {test, expect} from '../fixtures/testFixtures';
import HomePage from '../pages/HomePage.po';
import LoginPage from '../pages/LoginPage.po';
import user from '../test-data/user';

test.describe('API-UI tests', ()=> {

    test("Create user from API , login in UI and delete the user @smoke", async({createUser, page})=> {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await expect(loginPage.headingTextLogin).toBeVisible();
        await loginPage.emailLoginField.fill(createUser.uniqueEmail);
        await loginPage.passwordLoginField.fill(user.password);
        await loginPage.loginButton.click();
        await expect(page).toHaveURL('/');
        await expect(homePage.textLoggedIn).toContainText(createUser.uniqueUsername);

    })

})