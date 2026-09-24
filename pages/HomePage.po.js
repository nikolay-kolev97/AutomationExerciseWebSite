
export default class HomePage {

    constructor(page){
        this.page = page;
    }

    get buttonSignUpOrLogin(){
        return this.page.getByRole('link', {name: " Signup / Login"})
    }

    get textLoggedIn(){
        return this.page.locator('a').filter({hasText: "Logged in as"})
    }
}