import ProductPage from '../pages/productpage';

describe('cart quantity update', () => {
    before(() => {
        ProductPage.visit();
      });
  it('calculates the cart subtotal correctly with different products', () => {
    ProductPage.clickAddToCart();

    ProductPage.getCartSubtotal().invoke('text').then((subtotalText) => {
      const actualSubtotal = parseFloat(subtotalText.replace('$', '').trim());
      ProductPage.updateQuantity('Cropped Stay Groovy off white',3);
      ProductPage.getDisplayedQuantity().invoke('text').then((displayedQuantity) => {
        const actualDisplayedQuantity = parseInt(displayedQuantity,5);
        ProductPage.getCartSubtotal().invoke('text').then((updatedSubtotalText) => {
          const updatedSubtotal = parseFloat(updatedSubtotalText.replace('$', '').trim());
          const expectedSubtotal = (actualDisplayedQuantity * actualSubtotal).valueOf();
          expect(expectedSubtotal).to.equal(updatedSubtotal);
        });
      });
    });
  });
});
