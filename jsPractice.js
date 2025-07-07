const shopping = {
  boba:7.25, 
  mochi:4.25, 
  matcha:8.00, 
  brick:1.00,
  node:4.00
};
const cart = ["boba", "mochi", "matcha"];
function myCartTotal(cart) {
  let total = 0.0;
  for (let item of cart){
    total += shopping[item]
  };
  return total;
};

console.log('$' + myCartTotal(cart));
