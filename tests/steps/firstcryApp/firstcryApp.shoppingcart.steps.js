const { Given, When, Then } = require('@wdio/cucumber-framework');
const firstcryAppPage = require('../../pageobjects/firstcryApp.page')



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
    const verifyName = await $('//android.widget.TextView[@text="Babyhug 100% Cotton Woven Full Sleeves Frill Designed Checked Top & Pant - White & Maroon"]').getText();
    await expect(verifyName).toEqual('Babyhug 100% Cotton Woven Full Sleeves Frill Designed Checked Top & Pant - White & Maroon');
    console.log(verifyName,'=========verifyName============')
    await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').click();
    await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').click();
    


    await new Promise(resolve => setTimeout(resolve, 5000));
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // await $('//android.view.View[@resource-id="15607528"]').click();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').click();

    await $('//android.view.View[@text=""]').click();
    
    await $('//android.widget.TextView[@text="B"]').click();
    // await $('//android.view.View[@text=""]').click();
});

Then(/^User added to product to shopping cart and verify the product name in shopping cart$/, async () => {
    
    await firstcryAppPage.moveProductToShoppingCart();    
    await firstcryAppPage.addProductToCart()    
    await new Promise(resolve => setTimeout(resolve, 2000));
    const verifyName = await $('//android.widget.TextView[@text="Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue"]').getText();
    await expect(verifyName).toEqual('Babyhug Cotton Woven Full Sleeves Checkered Shirt with Inner Tee & Jeans - Red & Blue');
    console.log(verifyName,'******************')

});




