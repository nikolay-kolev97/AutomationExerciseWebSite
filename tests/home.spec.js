import {test, expect} from '@playwright/test';

test.describe("Basic tests" , () => {

    test("Open web site @smoke", async({page})=> {
        await page.goto('/', {waitUntil: 'domcontentloaded'});
        const consentButton = page.getByRole('button', { name: 'Consent' });
        try {
            await consentButton.click({ timeout: 3000 });
        } catch {
            // Consent popup is not shown in this environment
        }
        
        await page.goto('/products');
        await expect(page).toHaveURL('/products')
    })  



})