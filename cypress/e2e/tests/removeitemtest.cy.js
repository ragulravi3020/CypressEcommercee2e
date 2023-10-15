import ProductPage from '../pages/productpage';

describe('Cart Item Removal Test', () => {
  beforeEach(() => {
    ProductPage.visit();
  });

  it('should remove items from the cart', () => {
    ProductPage.clickAddToCart();
    const itemNameToRemove = 'Basic Cactus White T-shirt';
    ProductPage.removeItemFromCart(itemNameToRemove);

    ProductPage.getCartItemCount().should('eq', 0);
  });
});
