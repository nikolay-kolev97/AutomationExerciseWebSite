import {test, expect} from '@playwright/test';

test.only("Open web site", async({page})=> {
    await page.goto('/');
    await page.getByRole('button', {name: 'Consent'}).click();
    await page.goto('/products');
    await expect(page).toHaveURL('/products')
})  