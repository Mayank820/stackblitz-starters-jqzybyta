const addToCartButtons = document.querySelectorAll('.product button');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.querySelector('#cart-total h3');
let cart = [];
function Cart() {
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Cart is empty</div>';
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <span>${item.name} - $${(item.price * item.quantity).toFixed(
        2
      )}</span>
          <div class="quantity-controls">
            <button class="decrement-btn" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increment-btn" data-index="${index}">+</button>
          </div>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
function addToCart(productName, productPrice) {
  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }
  Cart();
}
function removeFromCart(index) {
  cart.splice(index, 1);
  Cart();
}

function incrementQuantity(index) {
  cart[index].quantity += 1;
  Cart();
}

function decrementQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeFromCart(index);
  }
  Cart();
}

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(
      product.querySelector('p').textContent.replace('$', '')
    );
    addToCart(productName, productPrice);
  });
});

cartItemsContainer.addEventListener('click', (event) => {
  const index = event.target.getAttribute('data-index');
  if (index !== null) {
    if (event.target.classList.contains('remove-btn')) {
      removeFromCart(index);
    } else if (event.target.classList.contains('increment-btn')) {
      incrementQuantity(index);
    } else if (event.target.classList.contains('decrement-btn')) {
      decrementQuantity(index);
    }
  }
});

Cart();
