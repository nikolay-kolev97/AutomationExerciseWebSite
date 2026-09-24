import {test, expect} from '../fixtures/testFixtures'
import AccountCreatePage from '../pages/AccountCreatePage.po.js';
import LoginPage from '../pages/LoginPage.po.js';
import SignUpPage from '../pages/SignUpPage.po.js';
import user from '../test-data/user'

test.describe("Registration / Login Form", ()=> {

    test('should register a new user successfully @smoke', async({loginResource, page})=> {
        const loginPage = new LoginPage(page);
        const signUpPage = new SignUpPage(page);
        const accountCreatePage = new AccountCreatePage(page);
    
        await loginPage.nameField.fill(loginResource.uniqueUsername);
        await loginPage.emailSignUpField.fill(loginResource.uniqueEmail);
        await loginPage.signUpButton.click();
        await expect(page).toHaveURL(/signup/);

        //SignUp Page - Enter account information
        await expect(signUpPage.headingText).toBeVisible();
        await signUpPage.titleMrCheck();
        await expect(signUpPage.nameField).toHaveValue(loginResource.uniqueUsername);
        await expect(signUpPage.emailField).toHaveValue(loginResource.uniqueEmail);
        await signUpPage.passwordField.fill(user.password);
        await signUpPage.chooseBirthDay(user.birthDay);
        await signUpPage.chooseMonth(user.birthMonth);
        await signUpPage.chooseYear(user.birthYear);

        // Enter Address information
        await signUpPage.firstNameField.fill(user.firstName);
        await signUpPage.lastNameField.fill(user.lastName);
        await signUpPage.addressField.fill(user.address);
        await signUpPage.chooseCountry(user.country);
        await signUpPage.stateField.fill(user.state);
        await signUpPage.cityField.fill(user.city);
        await signUpPage.zipCodeField.fill(user.zipCode);
        await signUpPage.mobileNumberField.fill(user.mobileNumber);
        await signUpPage.createAccountButton.click();
        await expect(page).toHaveURL(/account_created/);
        
        // Account created page
        await expect(accountCreatePage.headingText).toBeVisible();
        await accountCreatePage.continueButton.click();
        await expect(page).toHaveURL('/');
        
    })
    

})