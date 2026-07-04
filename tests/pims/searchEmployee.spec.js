const { test } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const Sidebar = require('../../components/Sidebar');
const PIMPage = require('../../pages/PIMPage');

const loginData = require('../../test-data/login.json');

test.describe('PIM - Search Employee', () => {

    let loginPage;
    let sidebar;
    let pimPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        sidebar = new Sidebar(page);
        pimPage = new PIMPage(page);

        await loginPage.navigate();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await sidebar.openPIM();

        await pimPage.openEmployeeList();

    });

    test('Search Non Existing Employee', async () => {

        await pimPage.searchEmployee('XYZ123');

        await pimPage.verifyNoRecordsFound();

    });

});