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
      cart[key] = 1;;
    };
    updateCartDisplay();
  });
}

function updateCartDisplay() {
  const cartElem = document.getElementById('cart');
  cartElem.innerHTML = ''; // clear old cart display
  let total = 0;
  for (const item in cart) {
    const li = document.createElement('li');
    li.textContent = `${item}: ${cart[item]}`;
    cartElem.appendChild(li);
    total = shopping[item][0] * cart[item];
    updateTotal(total);
  };
};

function updateTotal(total) {
  const totalCost = document.getElementById('cart-total');
  totalCost.textContent = total;
};