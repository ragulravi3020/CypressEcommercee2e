import ProductPage from '../pages/productpage';

describe('Cart Subtotal Test', () => {
    before(() => {
        ProductPage.visit();
      });
  it('should calculate cart subtotal correctly', () => {
  
    ProductPage.addToCartname('Cropped Stay Groovy off white')
    ProductPage.addToCartname('Basic Cactus White T-shirt')
    ProductPage.addToCartname('Skater Black Sweatshirt')

    const product1Price = 10.90;
    const product2Price = 13.25;
    const product3Price = 25.90;
    
    ProductPage.getCartSubtotal().invoke('text').then((subtotalText) => {
      const actualSubtotal = parseFloat(subtotalText.replace('$ ', '').trim());
      const expectedSubtotal = (product1Price + product2Price + product3Price).valueOf(2);
      expect(actualSubtotal).to.equal(expectedSubtotal);
    });
  })
})
