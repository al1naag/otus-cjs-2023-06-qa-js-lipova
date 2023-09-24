const { I } = inject();
const { expect } = require('chai');

module.exports = {

    checkoutButton: '//button[contains(text(),"Checkout")]',
    removeProductButton: '//button[@title="remove product from cart"]',
    closeCartButton: '//span[normalize-space()="X"]',
    cartPopup: '//div[contains(., "Cart")]',
    cartSubtotal: '//div[p[normalize-space() = "SUBTOTAL"]]/div/p[contains(., "$")]',
    productsList: '(//div[contains(., "Cart")]/following-sibling::div)[1]',

    async openCheckout () {
        await I.click(this.checkoutButton)
    },

    async closeCheckoutPopup () {
        await I.acceptPopup();
    },

    async closeCart () {
        await I.click(this.closeCartButton)
    },

    async checkCheckoutSubtotal (subtotal) {
        await expect(await I.grabPopupText()).to.equal(`Checkout - Subtotal: $ ${subtotal}`)
    },

    async checkSubtotal (subtotal) {
        await expect(await I.grabTextFrom(this.cartSubtotal)).to.contain(`$ ${subtotal}`)
    },


    async removeProductFromCart(product){
       await I.click(`//p[contains(text(), '${product}')]/../../button[@title='remove product from cart']`)
    },


    async findProductInCart(product){
        const productsInCart =  await I.grabTextFrom(this.productsList)
        return productsInCart.includes(product);
    },

    async increaseProductInCart(product){
        await I.click(`//div[.//p[contains(., '${product}')]]//button[normalize-space(.) = '+']`)
    },

    async decreaseProductInCart(product){
        await I.click(`//div[.//p[contains(., '${product}')]]//button[normalize-space(.) = '-']`)
    },

}
