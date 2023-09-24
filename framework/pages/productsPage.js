const { I } = inject();
const { expect } = require('chai');

module.exports = {

    productsCartCount: '//span[contains(., "Cart")]/preceding-sibling::div/div',
    productsCount: '//p[contains(.,"Product(s) found")]',

    async visit() {
        await I.amOnPage('/');
        await I.wait(3);
    },

    async addProductToCart(product) {
        await I.click(`//p[text()='${product}']/following-sibling::button[text()='Add to cart']`);
    },

    async countProductsInCart(amount) {
        await expect(await I.grabTextFrom(this.productsCartCount)).to.equal(amount);
    },


    async chooseSize(size) {
        await I.click(`//span[normalize-space()='${size}']`);
        await I.wait(2);
    },

    async checkFilteredProductsCount(count) {
        await expect(await I.grabTextFrom(this.productsCount)).to.equal(`${count} Product(s) found`);
    }
}
