const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define elements
     */

    get productLabel() { return $("div .product_label"); }
    get sortItemsDropdown() { return $("select.product_sort_container");}
    get inventoryList() { return $(".inventory_list");}

    get inventoryItem() { return $(".inventory_item");}
    //get inventoryItemPrice() { return $(".inventory_item_price");}
    //get inventoryItemAddToCartButton() { return $("button.btn_primary.btn_inventory");}

    get inventoryItemAddToCartButtonSecond() { return $("#inventory_container > div > div:nth-child(2) > div.pricebar > button"); }
    get inventoryItemAddToCartButtonLast() { return $("#inventory_container > div > div:nth-child(6) > div.pricebar > button"); }
    get cartLink() {return $(".shopping_cart_link");}
    get cartBadge() {return $(".shopping_cart_badge");}

    getTitle () {
        const productLabel = this.productLabel.getText();
        return productLabel;
    }

    sortItemsByPriceDesc(text) {
        this.sortItemsDropdown.click();
        this.sortItemsDropdown.selectByVisibleText(text);
        this.sortItemsDropdown.click();
        //browser.pause(3000);
    }

    getTextSelectedSortOption() {
        return this.sortItemsDropdown.isSelected();
    }

    isInventoryListDisplayed(){
        this.inventoryList.waitForDisplayed(1000);
        return this.inventoryList.isDisplayed();
    }

    clickAddToCartButtonSecondCostliest() {
        this.inventoryItemAddToCartButtonSecond.click();
       //browser.pause(3000);
    }

    clickAddToCartButtonCheapest() {
        this.inventoryItemAddToCartButtonLast.click();
        //browser.pause(3000);
    }

    getTextCartBadge() {
        return this.cartBadge.getText();
    }

    clickCartIcon() {
        this.cartLink.click();
        //browser.pause(3000);
    }

    getInventoryItem(index) {
        return this.inventoryItem[index];
    }
}

module.exports = new ProductsPage();
