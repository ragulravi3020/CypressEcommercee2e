import ProductPage from '../pages/productpage';

describe('Product Display Test', () => {
  before(() => {
    ProductPage.visit();
  });

  it('should display all products with images, titles, and prices', () => {
    
    ProductPage.getProducts().should('have.length.gt', 0);

    ProductPage.getProducts().each((product) => {
      cy.wrap(product).find('.csvtPz').should('be.visible'); 
      cy.wrap(product).find('.eeXMBo').should('be.visible');  
      cy.wrap(product).find('.ljgnQL').should('be.visible');  
    });
  });
});
