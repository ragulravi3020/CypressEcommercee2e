import ProductPage from '../pages/productpage';

describe('Cart Icon update', () => {
    before(() => {
        ProductPage.visit();
      });

    it('Test that the cart icon updates with the correct number of items when products are added to the cart', () => {

    ProductPage.getCartIconCount().then(($initialCount) => {
    const initialCount = parseInt($initialCount.text().trim());

    ProductPage.clickAddToCart();

    ProductPage.getCartIconCount().then(($updatedCount) => {
        const updatedCount = parseInt($updatedCount.text().trim()); 
  
        expect(updatedCount).to.equal(initialCount + 1);
    });
  });
});
});
