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
  document.getElementById('store-items').appendChild(button); //appends the buttons onto the web page underneath the assiciated id
}

//adds a #store-items div to the HTML elements
const newStoreItemElem = document.createElement('store-items');

// create text node
const storeText = document.createTextNode('new text');

// append text to new store element
newStoreItemElem.appendChild(storeText);

// get the list of elements matching the button tag
const buttonList = document.getElementsByTagName('store-items');

const addItem = (event, item) => {
  const button = document.createElement('item'); //creating an instance of each buttom
  button.textContent = item; //assigning a title to each buttom
  document.getElementById('cart').appendChild(button); //
};

// add event listeners to all buttons in buttonList
for (const btn of buttonList) {
  // listen for click events
  // call the changeBackground() function when the event is triggered
  // note that the event handler argument is an anonymous function that accepts the event object as a parameter
  btn.addEventListener('click', (event) => changeBackground(event, event.target.textContent))
}; 