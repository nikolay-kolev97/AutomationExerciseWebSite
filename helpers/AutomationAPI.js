import user from "../test-data/user";

export default class AutomationAPI {

    constructor(request){
        this.request = request;
    }


    async getAllProducts(){
        const responseAllProducts = await this.request.get('/api/productsList');
        return responseAllProducts;
    }

    async searchProduct(){
        const responseSearchProduct = await this.request.post('/api/searchProduct',{
        form: {
            search_product: "top"
        }}
        )
        return responseSearchProduct;
    }

    async getAllBrands(){
         const responseAllBrands = await this.request.get('/api/brandsList');
        return responseAllBrands;
    }

    async createUser(uniqueUserName , uniqueEmail){
        const responseCreateUser = await this.request.post('/api/createAccount', {
            form: {
                name: uniqueUserName,
                email: uniqueEmail,
                password: user.password,
                title: user.title,
                birth_date: user.birthDay,
                birth_month: user.birthMonth,
                birth_year: user.birthYear,
                firstname: user.firstName,
                lastname: user.lastName,
                company: "",
                address1: user.address,
                address2: "",
                country: user.country,
                zipcode: user.zipCode,
                state: user.state,
                city: user.city,
                mobile_number: user.mobileNumber
            }
        });
        return responseCreateUser
    }

    async deleteUser(uniqueEmail, password){
        const responseDeleteUser = await this.request.delete('/api/deleteAccount', {
            form: {
                email: uniqueEmail,
                password: password
            } 
        });
        return responseDeleteUser;
    }
}