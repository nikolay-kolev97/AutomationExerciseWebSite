
export default class SignUpPage {

    constructor(page){
        this.page = page;
    }

    get headingText(){
        return this.page.getByRole('heading', {name: "Enter Account Information"})
    }

    get titleLabel(){
        return this.page.getByLabel('Title');
    }

    get nameField(){
        return this.page.locator('#name')
    }

    get emailField(){
        return this.page.locator('#email')
    }

    get passwordField(){
        return this.page.locator('#password')
    }

    get birthDayDropDown(){
        return this.page.locator('#days')
    }

    get birthMonthDropDown(){
        return this.page.locator('#months')
    }

    get birthYearDropDown(){
        return this.page.locator('#years')
    }

    get firstNameField(){
        return this.page.locator('#first_name')
    }

    get lastNameField(){
        return this.page.locator('#last_name')
    }

    get addressField(){
        return this.page.locator('#address1')
    }

    get countryDropDown(){
        return this.page.locator('#country')
    }

    get stateField(){
        return this.page.locator('#state')
    }

    get cityField(){
        return this.page.locator('#city')
    }

    get zipCodeField(){
        return this.page.locator('#zipcode')
    }

    get mobileNumberField(){
        return this.page.locator('#mobile_number')
    }

    get createAccountButton(){
        return this.page.getByRole('button', {name: "Create Account"})
    }

    async titleMrCheck(){
        await this.page.locator('#id_gender1').check();
    }

    async chooseBirthDay(day){
        await this.birthDayDropDown.selectOption(day)
    }

    async chooseMonth(month){
        await this.birthMonthDropDown.selectOption(month)
    }   

    async chooseYear(number){
        await this.birthYearDropDown.selectOption(number)
    }

    async chooseCountry(country){
        await this.countryDropDown.selectOption(country)
    }

    
}