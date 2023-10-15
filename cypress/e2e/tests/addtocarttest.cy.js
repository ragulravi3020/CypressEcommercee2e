import ProductPage from '../pages/productpage';

describe('Add to Cart', () => {
    before(() => {
        ProductPage.visit();
      });

  it('should add a product to the cart and verify the product in the cart', () => {

    let productName;
    ProductPage.getProductName().then(($productName) => {
      productName = $productName.text().trim();
    });

    ProductPage.clickAddToCart();

    ProductPage.getProductNameInCart().should('have.text', '1');

    ProductPage.getProductNameInCart2().then(($cartProductName) => {
        expect($cartProductName.text().trim()).to.equal(productName);
      });
  });
});
