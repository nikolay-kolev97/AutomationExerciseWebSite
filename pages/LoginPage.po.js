
export default class LoginPage {

    constructor(page){
        this.page = page;
    }

    get nameField(){
        return this.page.locator('[data-qa="signup-name"]');
    }

    get emailSignUpField(){
        return this.page.locator('[data-qa="signup-email"]')
    }

    get emailLoginField(){
        return this.page.locator('[data-qa="login-email"]');
    }

    get passwordField(){
        return this.page.locator('#password')
    }

    get signUpButton(){
        return this.page.getByRole('button', {name: "Signup"})
    }

    get loginButton(){
        return this.page.getByRole('button', {name: "Login"})
    }

}