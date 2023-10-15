import ProductPage from '../pages/productpage';

describe('Clear Filters', () => {
    before(() => {
        ProductPage.visit();
      });

    it('should clear/reset filters and return to the default state', () => {
  
      
      ProductPage.selectSize('M');
  
      ProductPage.getNumberOfProducts().should('not.contain', '16 Product(s) found');
  
      ProductPage.selectSize('M');
  
      ProductPage.getNumberOfProducts().should('have.text', '16 Product(s) found');
    });
  });
  