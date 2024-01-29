
const { Given, When, Then } = require('@wdio/cucumber-framework');


Given(/^User opens a safewater application$/, async() => {
	await $('//android.view.ViewGroup[@resource-id="safewaters.app:id/container"]').click();
    await $('//android.widget.TextView[@resource-id="safewaters.app:id/login"]').click();
});

When(/^User enter valid credentials to login application$/, async() => {
    await $('//android.widget.EditText[@resource-id="safewaters.app:id/email"]').setValue('jegadeeshkit@gmail.com');
    await $('//android.widget.EditText[@resource-id="safewaters.app:id/password"]').setValue('12345678');
});

Then(/^User submit the login$/, async() => {
    await $('//android.widget.Button[@resource-id="safewaters.app:id/btnLogin"]').click();
});
