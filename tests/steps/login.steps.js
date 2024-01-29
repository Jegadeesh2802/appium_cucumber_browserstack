const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const { AppiumDriver } = require('appium/build/lib/appium');

Given(/^I am on the landing page$/, async () => {
    await $('//android.widget.Button[@resource-id="com.firstmilegeo.collector:id/skip"]').click();
});

When(/^User add valid credentials to login application$/, async () => {
    await $('//android.widget.EditText[@resource-id="com.firstmilegeo.collector:id/user_email"]').setValue('jegadeeshkit@gmail.com');
    await $('//android.widget.EditText[@resource-id="com.firstmilegeo.collector:id/user_password"]').setValue('12345678');
    await $('//android.widget.Button[@text="LOGIN"]').click();
});

Then(/^Allow the user location$/, async () => {
    await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]').click();
    await $('//android.widget.ImageButton[@content-desc="Open"]').click(); 
})


Then(/^Verify username and email for logged user$/, async () => {
    await expect(LoginPage.loggedUserName).toBeExisting();
    await expect(LoginPage.loggedUserName).toHaveTextContaining('Jegadeesh');

    await expect(LoginPage.loggedUserEmail).toBeExisting();
    await expect(LoginPage.loggedUserEmail).toHaveTextContaining('jegadeeshkit@gmail.com');

});

///

Then(/^User navigate the course section$/, async() => {
	await $('//android.widget.TextView[@resource-id="com.firstmilegeo.collector:id/material_drawer_name" and @text="Profile"]').click();
    await new Promise(resolve => setTimeout(resolve, 10000));
    // await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.firstmilegeo.collector:id/material_drawer_recycler_view"]/android.view.ViewGroup[6]').click();
	// await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.firstmilegeo.collector:id/material_drawer_recycler_view"]/android.view.ViewGroup[6]').click();

    
    // await $('//android.webkit.WebView[@resource-id="com.firstmilegeo.collector:id/webkit"]').click();
    // await $('//android.widget.TextView[@text="View more courses"]').waitForExist({ timeout: 5000 });
    // await $('//android.widget.TextView[@text="DONE"]').click();
	// await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.firstmilegeo.collector:id/material_drawer_recycler_view"]/android.view.ViewGroup[6]').click();
	// await $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.firstmilegeo.collector:id/material_drawer_recycler_view"]/android.view.ViewGroup[6]').click();


});


// Add Steps here

// Then(/^User logout to the application$/, async () => {

//     await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]').click();
//     await $('//android.widget.ImageButton[@content-desc="Open"]').click(); 


//     await $('//android.widget.TextView[@resource-id="com.firstmilegeo.collector:id/material_drawer_name" and @text="Logout"]').click();
//     await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
// })






