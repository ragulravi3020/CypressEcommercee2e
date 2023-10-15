class ProductPage {
  visit() {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
  }

  getProducts() {
    return cy.get('.sc-124al1g-2');
  }

  selectSize(size) {
    cy.get(`input[value="${size}"]`).check({force: true});
  }

  clickAddToCart() {
    cy.get('.sc-124al1g-0.jCsgpZ').first().click();
  }

  getNumberOfProducts() {
    return cy.get('.sc-ebmerl-4.iliWeY p');
  }

  selectMultipleSizes(sizes) {
    sizes.forEach((size) => {
      cy.get(`input[value="${size}"]`).check({force: true});
    });
  }

  clearFilters() {
    cy.get('button[data-testid="clear-filters-button"]').click();
  }

  getProductNameInCart() {
    return cy.get('.sc-1h98xa9-3.VLMSP');
  }

  getProductNameInCart2() {
    return cy.get('.sc-11uohgb-2');
  }

  getProductName() {
    return cy.get('.dwOYCh > .sc-124al1g-4');
  }

  getCartIconCount() {
    return cy.get('.sc-1h98xa9-3');
  }

  addToCartname(productName) {
    cy.contains(productName).parent().find('button').click({force: true})
  }

  getCartSubtotal() {
    return cy.get('.sc-1h98xa9-9')
  }

  updateQuantity(productName, newQuantity) {
    cy.get('.sc-11uohgb-4 > div > :nth-child(2)')
      .click({ multiple: true, times: newQuantity - +3 });
  }

  getDisplayedQuantity() {
    return cy.get('.sc-1h98xa9-3')
  }
  
  removeItemFromCart(itemName) {
    cy.get('button[title="remove product from cart"]').click();
  }

  getCartItemCount() {
    return cy.get('.sc-1h98xa9-3').invoke('text').then(parseFloat);
  }
}

export default new ProductPage();