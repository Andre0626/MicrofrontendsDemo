import facker from 'faker';

const cartText = `<div> You have ${facker.random.number()} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;