const { Given, When, Then } = require('@wdio/cucumber-framework');
const firstcryAppPage = require('../pageobjects/firstcryApp.page')



Given(/^User setup the profile of the baby$/, async () => {
    await firstcryAppPage.submitChildDetails('Jegadeesh')
});

When(/^User search the product in search bar$/, async () => {
    await firstcryAppPage.userSearchProductInSearchBar('Sets & Suites')

});

Then(/^User Added the product to wishlist$/, async () => {
    await firstcryAppPage.addProductToWishList()
});

Then(/^User verify the product name in wishlist$/, async () => {
    await firstcryAppPage.clickselectedProduct()    
    const verifyName = await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').getText();
    await expect(verifyName).toEqual('Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue');
    await $('//android.view.View[@text=""]').click();
    await $('//android.widget.TextView[@text="B"]').click();
});

Then(/^User added to product to shopping cart and verify the product name in shopping cart$/, async () => {
    
    await firstcryAppPage.moveProductToShoppingCart()    
    const compartProductName = await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').getText();
    await expect(compartProductName).toEqual('Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue');
    await firstcryAppPage.addProductToCart()    
    
    const verifyCartItem = await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').getText();
    await expect(verifyCartItem).toEqual('Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue');

});




