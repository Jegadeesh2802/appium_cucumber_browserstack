const selector = require('../helpers/selector')

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get firstcryAppLanding () {
        return selector({
            android: $(`//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get enterChildName () {
        return selector({
            android: $(`//android.widget.LinearLayout[@resource-id="fc.admin.fcexpressadmin:id/reactMain"]/android.widget.FrameLayout/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.EditText`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get selectCalender () {
        return selector({
            android: $(`//android.widget.TextView[@text="w"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get selectDateOfBirth () {
        return selector({
            android: $(`//android.view.View[@content-desc="04 January 2024"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get submitDateOfBirth () {
        return selector({
            android: $(`//android.widget.Button[@resource-id="android:id/button1"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get submitChildInformation () {
        return selector({
            android: $(`//android.widget.TextView[@text="SUBMIT"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    //Search Product 
    get selectProductGroup () {
        return selector({
            android: $(`//android.widget.LinearLayout[@resource-id="fc.admin.fcexpressadmin:id/reactMain"]/android.widget.FrameLayout/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get clickCloseDialog () {
        return selector({
            android: $(`//android.widget.TextView[@resource-id="fc.admin.fcexpressadmin:id/ivClosePermisionDialog"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get clickSearchBar () {
        return selector({
            android: $(`//android.widget.TextView[@text="'"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get searchValue () {
        return selector({
            android: $(`//android.widget.EditText[@text="Search for products or brands"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get selectProductFromDropDown () {
        return selector({
            android: $(`//android.widget.LinearLayout[@resource-id="fc.admin.fcexpressadmin:id/reactMain"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    
    get selectProductAddWishList () {
        return selector({
            android: $(`//android.widget.TextView[@text="Babyhug 100% Cotton Woven Full Sleeves Frill Designed Checked Top & Pant - White & Maroon"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    get addWishList () {
        return selector({
            android: $(`//android.view.View[@text=""]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    //Then 5
    get clickBackIcon () {
        return selector({
            android: $(`//android.widget.TextView[@text="B"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get clickWishListItems () {
        return selector({
            android: $(`//android.widget.TextView[@resource-id="fc.admin.fcexpressadmin:id/tvShortlistIcon"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get viewSelectProductView () {
        return selector({
            android: $(`//android.widget.LinearLayout[@resource-id="fc.admin.fcexpressadmin:id/reactMain"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ImageView`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }


    //Add to cart
   
    get clickAddToCart () {
        return selector({
            android: $(`//android.widget.TextView[@text="ADD TO CART"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
    get clickGotoCart () {
        return selector({
            android: $(`//android.widget.TextView[@text="GO TO CART"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }

    get calenderBack () {
        return selector({
            android: $(`//android.widget.ImageButton[@content-desc="Previous month"]`),
            // ios: $(`//XCUIElementTypeTextField[@name="UserName"]`)
        });
    }
  
    async submitChildDetails (childName) {
        await this.firstcryAppLanding.click();
        await this.enterChildName.setValue(childName);
        await this.selectCalender.click();
        await this.calenderBack.click();
        await this.selectDateOfBirth.click();
        await this.submitDateOfBirth.click();
        await this.submitChildInformation.click();

    }

    async userSearchProductInSearchBar(productName){
        await this.selectProductGroup.click();
        await this.clickCloseDialog.click();
        await this.clickSearchBar.click();
        await this.searchValue.setValue(productName);
        await new Promise(resolve => setTimeout(resolve, 10000));
        await this.selectProductFromDropDown.click();

    }

    
    async addProductToWishList(){
        await this.selectProductAddWishList.click();
        await this.selectProductAddWishList.click();
        await this.addWishList.click();
    }

    async clickselectedProduct(){
        await this.selectProductAddWishList.click();
    }


    async moveProductToShoppingCart(){
        // await this.addWishList.click();
        // await this.clickBackIcon.click();
        await this.clickWishListItems.click();
        await this.viewSelectProductView.click();

    }


    async addProductToCart(){
        await this.clickAddToCart.click();
        await this.clickAddToCart.click();
        await this.clickGotoCart.click();

    }



}

module.exports = new LoginPage();
