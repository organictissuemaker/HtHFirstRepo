const shopping = {
  boba: [7.25, 10], 
  mochi:[4.25, 5], 
  matcha: [8.00, 10], 
  labubu: [1.00, 100],
  cat: [4.00, 100]
}; 

const cart = {};

for (let key in shopping) {
  const button = document.createElement('button'); //creating an instance of each buttom
  button.textContent = key; //assigning a title to each buttom
  document.getElementById('store-items').appendChild(button); //appends the buttons onto the web page underneath the store-items div

  //adding an event listner for each button
  button.addEventListener('click', () => {
    if (cart[key] && shopping[key][1] != cart[key]){
      cart[key] += 1;
    };
    if (!cart[key]) {
      cart[key] = 1;
    };
    if (cart[key] >= shopping[key][1]) {
      const message = document.createElement('p');
      message.textContent = 'Out of stock!';
      message.classList.add('out-of-stock');
      const outOfStock = document.getElementById('out-of-stock');
      outOfStock.appendChild(message);

      setTimeout(() => {
        outOfStock.removeChild(message);
      }, 1000);
    }
    updateCartDisplay();

    button.classList.add('button-animate');
    setTimeout(() => button.classList.remove('button-animate'), 300);
  });
}

function updateCartDisplay() {
  const cartElem = document.getElementById('cart');
  cartElem.innerHTML = ''; // clear old cart display
  let total = 0;
  for (const item in cart) { 
    //create a list of items as a dic
    const li = document.createElement('li');

    //add the item with the corresponding number in the li
    li.textContent = `${item}: ${cart[item]}`;

    //append the list into the cart div 
    cartElem.appendChild(li);

    //calculate the total and send it to another function for display
    total += shopping[item][0] * cart[item];
    updateTotal(total);
  };
};

function updateTotal(total) { //func to display total
  const totalCost = document.getElementById('cart-total');
  totalCost.textContent = total;
};

// shopping.js
module.exports = {
  updateCartDisplay, 
  updateTotal, 
}; 