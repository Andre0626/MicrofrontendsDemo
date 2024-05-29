import facker from 'faker';


const mount = (el) => {
    const cartText = `<div> You have ${facker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    
    // Assuming our continaer doesnt have an element with an id of 'dev-cart'
    if (el) {
        // We are probably running in isolation
        mount(el);
    
    }
}

export { mount };