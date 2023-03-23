// Get the "add to cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the cart and total elements
const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');

// Set the initial total to 0
let total = 0;

// Loop through each "add to cart" button and add a click event listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the name and price data attributes of the clicked button
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Add the item to the cart
    const item = document.createElement('li');
    item.innerText = `${name} - $${price.toFixed(2)}`;
    cart.appendChild(item);

    // Add the price to the total
    total += price;
    totalElement.innerText = total.toFixed(2);
  });
});
