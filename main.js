const addToCart = document.getElementById('addToCart');
const cart = document.getElementById('cart');
const cartItemLocation = document.getElementById('itemsHolder');

let barcode = document.getElementById('code');
let quant = document.getElementById('ammount');
let total = document.getElementById('totalValue');
let totalAfterTax = document.getElementById('afterTax');
let checkoutItems = 0

addToCart.addEventListener('click', function() {
    addItem(barcode.value);
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem(barcode.value);
    }
})

function addItem(barVal) {
    console.log(barVal);
    if(!(barVal in products)){
        return;
    }
    if(checkoutItems) {
        for(let i = 0; i < checkoutItems; i++) {

        }
    }
    barcode.value = '';
    checkoutItems++;
    cart.classList.remove('hidden');

    const cartItem = document.createElement('div');
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');
    const itemAmmount = document.createElement('p');

    cartItemLocation.appendChild(cartItem);
    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(itemAmmount);

    console.log(products[barVal].name);
    itemName.innerText = products[barVal].name;
    itemPrice.innerText = products[barVal].price;
    if(quant.value) {
        itemAmmount.innerText = quant.value;
    } else {
        itemAmmount.innerText = 1
    }

    cartItem.classList.add('cartItem');
    itemName.classList.add('item');
    itemPrice.classList.add('item');
    itemAmmount.classList.add('item');

    cartItem.accessKey = checkoutItems


    console.log(`accesskey = ${cartItem.accessKey}`)
    console.log(cartItem.innerText)
    console.log(cartItem.innerText.includes(products[barVal].name))
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
addItem(689145740844)
