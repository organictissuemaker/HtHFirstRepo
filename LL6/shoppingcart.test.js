// shoppingcart.test.js
const {updateCartDisplay, updateTotal} = require('./shoppingcart.js')

describe('Shopping Cart Functions', () => {

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="store-items"></div>
      <div id="out-of-stock"></div>
      <ol id="cart"></ol>
      <p id="cart-total-label">Cart Total: $<span id="cart-total">0</span></p>
    `; 
  }); 

  test('updateTotal sets the correct value in the DOM', () => {
    updateTotal(25.5);
    const totalDisplay = document.getElementById('cart-total');
    expect(totalDisplay.textContent).toBe("25.5");
  });

  test('updateCartDisplay updates cart and total', () => {
    const cart = { boba: 1, labubu: 1 };
    const shopping = {
      boba: [7.25, 10],
      mochi: [4.25, 5],
      matcha: [8.00, 10],
      labubu: [1.00, 100],
      cat: [4.00, 100]
    };

    updateCartDisplay(cart, shopping);

    const cartElem = document.getElementById('cart');
    const total = document.getElementById('cart-total').textContent;

    expect(cartElem.textContent).toContain('boba: 1');
    expect(cartElem.textContent).toContain('labubu: 1');
    expect(total).toBe('8.25');
  });

  require('./shoppingcart.js');

});

