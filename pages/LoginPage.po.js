
export default class LoginPage {

    constructor(page){
        this.page = page;
    }

    //Sign up Form --------------------------------------------------------------
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

    // Login form--------------------------------------------------------------------
    get loginButton(){
        return this.page.getByRole('button', {name: "Login"})
    }

    get headingTextLogin(){
        return this.page.getByRole('heading', {name: "Login to your account"})
    }

    get emailLoginField(){
        return this.page.locator('[data-qa="login-email"]')
    }

    get passwordLoginField(){
        return this.page.locator('[data-qa="login-password"]')
    }



}