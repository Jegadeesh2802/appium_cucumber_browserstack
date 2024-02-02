const { Given, When, Then } = require('@wdio/cucumber-framework');
const firstcryAppPage = require('../../pageobjects/firstcryApp.page')




Given(/^User submit the child name$/, async () => {
    await firstcryAppPage.submitChildDetails2('Jegadeesh')
});



Then(/^User submit the profile details$/, async() => {
	await firstcryAppPage.submitDetails();
});




