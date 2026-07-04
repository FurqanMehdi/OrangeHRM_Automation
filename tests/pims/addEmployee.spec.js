const { test } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const Sidebar = require('../../components/Sidebar');
const PIMPage = require('../../pages/PIMPage');

const loginData = require('../../test-data/login.json');
const employeeData = require('../../test-data/employee.json');

test('Add Employee', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const sidebar = new Sidebar(page);
    const pimPage = new PIMPage(page);

    await loginPage.navigate();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await sidebar.openPIM();

    await pimPage.openAddEmployee();

    await pimPage.addEmployeeData(
        employeeData.validEmployee
    );

    await pimPage.verifyEmployeeAdded();

});