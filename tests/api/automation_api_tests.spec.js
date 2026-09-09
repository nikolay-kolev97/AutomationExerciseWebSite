import {test, expect} from '@playwright/test';
import { AutomationAPI } from '../../helpers/AutomationAPI';

test('Api tests', async({request})=> {
    const api = new AutomationAPI(request);
    
    // GET all products
    const responseAllProducts = await api.getAllProducts();
    expect(responseAllProducts.status()).toBe(200);
    
    const responseAllProductsBody = await responseAllProducts.json();
    expect(responseAllProductsBody.responseCode).toBe(200);
    expect(responseAllProductsBody.products).toBeTruthy();
    expect(Array.isArray(responseAllProductsBody.products)).toBe(true);
    expect(responseAllProductsBody.products.length).toBeGreaterThan(0);

    // POST for search product
    const responseSearchProduct = await api.searchProduct();
    expect(responseSearchProduct.status()).toBe(200);
    const responseBodySearchProduct = await responseSearchProduct.json();
    expect(responseBodySearchProduct.responseCode).toBe(200);
    expect(responseBodySearchProduct.products).toBeTruthy();
    expect(Array.isArray(responseBodySearchProduct.products)).toBe(true);
    expect(responseBodySearchProduct.products.length).toBeGreaterThan(0);

    // GET all brands 
    const responseAllBrands = await api.getAllBrands();
    expect(responseAllBrands.status()).toBe(200);
    const responseBodyAllBrands = await responseAllBrands.json();
    expect(responseBodyAllBrands.responseCode).toBe(200);
    expect(responseBodyAllBrands.brands).toBeTruthy();
    expect(Array.isArray(responseBodyAllBrands.brands)).toBe(true);
    expect(responseBodyAllBrands.brands.length).toBeGreaterThan(0);
    expect(responseBodyAllBrands.brands[0].id).toBeTruthy();
    expect(responseBodyAllBrands.brands[0].brand).toBeTruthy();


})