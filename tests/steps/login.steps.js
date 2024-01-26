const { Given, When, Then } = require('@wdio/cucumber-framework');


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
})

Then(/^User logout to the application$/, async () => {
    await $('//android.widget.ImageButton[@content-desc="Open"]').click();
    await $('//android.widget.TextView[@resource-id="com.firstmilegeo.collector:id/material_drawer_name" and @text="Logout"]').click();
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
})






