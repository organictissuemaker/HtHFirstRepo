const shopping = {
  boba: [7.25, 10], 
  mochi:[4.25, 5], 
  matcha: [8.00, 10], 
  brick: [1.00, 100],
  node: [4.00, 100]
};
const cart = [("boba", 2), ("mochi", 6), ("matcha", 0), ("brick", 1), ("node", 1)];
function myCartTotal(cart) {
  let total = 0.0;
  for (let item of cart){  //item is a tuple w/ quantity
    //check if the item exists
      //yes - decriment the stock by 1, add to the total
        //check if stock is now zero
          //yes - remove from array and print the item name
          //no - continue
    
      //no  - continue

      
  };
  return total; //return total at the end
};

function itemExists(item, cart) { 
  
};

console.log('$' + myCartTotal(cart)); 
