import {test, expect} from "@playwright/test";
import AutomationAPI from "../helpers/AutomationAPI";
import fs from 'fs';
import user from "../test-data/user";


test("Auth teardown", async({request})=> { 
    const api = new AutomationAPI(request);
    const fileContent = fs.readFileSync(
        'playwright/.auth/user-data.json',
        'utf-8'
    );
    const authUser = JSON.parse(fileContent);   // from string to JS object

    const responseDeleteUser = await api.deleteUser(authUser.email, user.password)
    expect(responseDeleteUser.status()).toBe(200);
    const responseBodyDeleteUser = await responseDeleteUser.json();
    expect(responseBodyDeleteUser.responseCode).toBe(200);
    expect(responseBodyDeleteUser.message).toBe("Account deleted!")

})


