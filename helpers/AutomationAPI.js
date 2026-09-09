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
}