const { I } = inject();
const productsPage = require("../framework/pages/productsPage");
const cartPage = require("../framework/pages/cartPage");
const { expect } = require('chai');

Given('Open the products page', async() => {
    await productsPage.visit()
});


When('Add the product {string} to cart', async(product) => {
    await productsPage.addProductToCart(product);
});

Then('Assert product amount in cart equals {string}', (amount) => {
   return productsPage.countProductsInCart(amount);
});

Then('Assert product {string} in cart', async (product) => {
    await expect(await cartPage.findProductInCart(product)).to.equal(true);
});

When('Open checkout from cart', async () => {
    await cartPage.openCheckout();
});

When('Close checkout popup', async () => {
    await cartPage.closeCheckoutPopup();
});

Then('Assert subtotal in checkout equals {string}', async(subtotal) => {
    await cartPage.checkCheckoutSubtotal(subtotal);
});

Then('Assert subtotal in cart equals {string}',async (subtotal) => {
    await cartPage.checkSubtotal(subtotal);
});


When('Remove product {string} from the cart', async (product) => {
    await cartPage.removeProductFromCart(product);
});


When('Assert the product {string} removed from the cart', async (product) => {
    await expect(await cartPage.findProductInCart(product)).to.equal(false);
});

When('Filter size {string} on products page', async (size) => {
   await productsPage.chooseSize(size);
});

Then('Assert filtered product count equals {string}', async (count) => {
    await productsPage.checkFilteredProductsCount(count);
});

Then('Close the cart popup', async () => {
    await cartPage.closeCart();
});

Then('Check the cart popup closed', async () => {
    await I.dontSeeElement(cartPage.cartPopup);
});

Then('Increase the product {string} amount to {string}', async (product) => {
    await cartPage.increaseProductInCart(product);
});

Then('Decrease the product {string} amount to {string}', async (product) => {
    await cartPage.decreaseProductInCart(product);
});


