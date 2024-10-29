const addToCart = document.getElementById('addToCart');
const cart = document.getElementById('itemsHolder');

let barcode = document.getElementById('code');

addToCart.addEventListener('click', addItem);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
})

function addItem() {
    if(!(barcode.value in products)){
        return;
    }
    cart.classList.remove('hidden');
    barcode.value = '';

    const cartItem = document.createElement('div');
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    const itemAmmount = document.createElement('input');

    cart.appendChild(cartItem);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(itemAmmount);

    cartItem.classList.add('cartItem');
    itemName.classList.add('item');
    itemPrice.classList.add('item');
    itemAmmount.classList.add('item');
}



const products = {
    "689145740844": {
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248": {
        name: "Photo Paper",
        price: 10.99
    },
    "092265222983": {
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J": {
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "860004186236": {
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000": {
        name: "Kleenex",
        price: 3.99
    },
    "8809568749985": {
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480": {
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877": {
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
    },
    "9780134682334": {
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759": {
        name: "Spiral Notebook",
        price: 1.99
    },
    "888462022224": {
        name: "iPad Mini",
        price: 599.99
    }
}
function refocus() {
    barcode.focus();
}
window.onload = refocus;
barcode.addEventListener('blur', refocus);

