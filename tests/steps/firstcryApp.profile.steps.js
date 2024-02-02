const { Given, When, Then } = require('@wdio/cucumber-framework');
const firstcryAppPage = require('../pageobjects/firstcryApp.page')



Given(/^User setup the profile of the baby$/, async () => {
    await firstcryAppPage.submitChildDetails2('Jegadeesh')
});


Then(/^User submit the profile details$/, async() => {
	await firstcryAppPage.submitDetails();
});




