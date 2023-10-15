import ProductPage from '../pages/productpage';

describe('Filtering by Size', () => {
  before(() => {
    ProductPage.visit();
  });

  it('should filter products by size and display the expected number of products', () => {
    ProductPage.selectSize('XS');

    ProductPage.getNumberOfProducts().invoke('text').then((initialProductCountText) => {
      const initialProductCount = parseInt(initialProductCountText, 10);

      ProductPage.clickAddToCart();

      ProductPage.getNumberOfProducts().should('have.text', (initialProductCount - -1) + ' Product(s) found');
    });
  });
});
