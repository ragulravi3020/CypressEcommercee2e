import ProductPage from '../pages/productpage';

describe('Add to Cart multiple times', () => {
    before(() => {
        ProductPage.visit();
      });

    it('Test that adding multiple items of the same product increases the quantity in the cart', () => {

        ProductPage.getCartIconCount().then(($initialCount) => {
            const initialCount = parseInt($initialCount.text().trim());
            ProductPage.clickAddToCart();
            ProductPage.clickAddToCart();
            ProductPage.getCartIconCount().then(($updatedCount) => {
                const updatedCount = parseInt($updatedCount.text().trim());
                expect(updatedCount).to.equal(initialCount + 2); 
    });
  });
});
});
