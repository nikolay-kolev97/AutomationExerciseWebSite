
export default class HomePage {

    constructor(page){
        this.page = page;
    }

    get buttonSignUpOrLogin(){
        return this.page.getByRole('link', {name: " Signup / Login"})
    }
}