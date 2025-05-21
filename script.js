let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(({ item, price }) => {
    const li = document.createElement('li');
    li.textContent = `${item} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  alert("Thank you! Your order has been submitted.");
  cart = [];
  total = 0;
  updateCart();
  event.target.reset();
}
