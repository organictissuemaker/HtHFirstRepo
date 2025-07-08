const shopping = {
  boba: [7.25, 10], 
  mochi:[4.25, 5], 
  matcha: [8.00, 10], 
  brick: [1.00, 100],
  node: [4.00, 100]
}; 

const cart = [ 
  ["boba", 2], 
  ["mochi", 6],  
  ["matcha", 0],  
  ["brick", 1], 
  ["node", 1] 
]; 

function myCartTotal(cart) { 
  let total = 0.0; 
  for (let item of cart) {  //item is a tuple w/ quantity
    if (itemExists(item)) {  //check if the item exists
     const name = item[0]; 
     const quantity = item[1]; 
     total += addingTotal(name, quantity); 
    }; 
  }; 
  return total; //return total at the end 
};

function itemExists(item) {
  return shopping.hasOwnProperty(item[0])
};

function zeroStock(item){  //check if stock is now zero
  if (shopping[item][1] === 0){ //does something if true - remove from array and print the item name
    delete shopping[item];
    console.log(item + " is out of stock");
  };
};

function addingTotal(name, quantity){
  after = 0;
  while (quantity != 0 && shopping[name][1] > 0) {
    after += shopping[name][0];
    quantity -= 1;
    shopping[name][1] -= 1;
  };
  zeroStock(name)
  return after;
};

console.log('$' + myCartTotal(cart)); 
