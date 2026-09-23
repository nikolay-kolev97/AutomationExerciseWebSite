 

export default class AccountCreate {

    constructor(page){
        this.page = page;
    }

    get headingText(){
        return this.page.getByRole('heading', {name: "Account Created!"})
    }

    get continueButton(){
        return this.page.getByRole('link', {name: "Continue"})
    }
}