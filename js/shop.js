// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    let position = -1
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            position = i;
            break;
        }
    }

    let productFound = false
    for (let k = 0; k < cart.length; k++) {
        if (products[position].id === cart[k].id) {
            cart[k].quantity += 1
            let indexToChange = cart.findIndex(item => item.id == products[position].id)
            productFound = true

            document.querySelector(`tr[data-id="${cart[indexToChange].id}"] td:nth-child(3)`).textContent = cart[indexToChange].quantity

            let totalPrice = cart[indexToChange].quantity * cart[indexToChange].price
            document.querySelector(`tr[data-id="${cart[indexToChange].id}"] td:nth-child(4)`).textContent = totalPrice 
            break;
        } 
    }         
    
    if (productFound == false ) {
        cart.push({...products[position], quantity: 1} )

        let indexToAdd = cart.findIndex(item => item.id == products[position].id)
        
        const cartList = document.getElementById('cart_list');
            
        const row = document.createElement('tr');
        row.setAttribute('data-id', products[position].id);

        const productCell = document.createElement('th');
        productCell.scope = 'row';
        productCell.textContent = cart[indexToAdd].name;

        const priceCell = document.createElement('td');
        priceCell.textContent = cart[indexToAdd].price;

        const quantityCell = document.createElement('td');
        quantityCell.textContent = cart[indexToAdd].quantity

        const totPriceCell = document.createElement('td');
        totPriceCell.textContent = cart[indexToAdd].quantity * cart[indexToAdd].price

        row.appendChild(productCell);
        row.appendChild(priceCell);
        row.appendChild(quantityCell);
        row.appendChild(totPriceCell); 
 
        cartList.appendChild(row);
    } 

    let cartQuantity = cart.reduce((tot, item) => {return tot + item.quantity}, 0)
    document.getElementById('count_product').innerHTML = cartQuantity


    calculateTotal()
    applyPromotionsCart()
}

// Exercise 2
function cleanCart() {
  document.getElementById('cart_list').innerHTML = ''
  document.getElementById('total_price').innerHTML = ''
  document.getElementById('count_product').innerHTML = '0'
  cart.length = 0
}
   

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
  let cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
        cartTotal += cart[i].price * cart[i].quantity
    }
    document.getElementById('total_price').innerHTML  = cartTotal
    total = cartTotal
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let discountIndex = -1 
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            discountIndex = i;
            break;
        }
    }
 
     if (discountIndex !== -1 && cart[discountIndex].quantity > 3) {
        let discountedPrice = (cart[discountIndex].price * cart[discountIndex].quantity)*0.8
        document.querySelector(`tr[data-id="${cart[discountIndex].id}"] td:nth-child(4)`).textContent = discountedPrice
        document.getElementById('total_price').innerHTML  = total - cart[discountIndex].quantity * cart[discountIndex].price + discountedPrice
    } else {
        let totalPrice = cart[discountIndex].quantity * cart[discountIndex].price
        document.querySelector(`tr[data-id="${cart[discountIndex].id}"] td:nth-child(4)`).textContent = totalPrice
    }

    let discIndex = -1 
    for (let k = 0; k < cart.length; k++) {
        if (cart[k].id == 3) {
            discIndex = k;
            break;
        }
    }
     if (discIndex !== -1 && cart[discIndex].quantity > 10) {
        let discPrice = (cart[discIndex].price * cart[discIndex].quantity)*0.7
        document.querySelector(`tr[data-id="${cart[discIndex].id}"] td:nth-child(4)`).textContent = discPrice
        document.getElementById('total_price').innerHTML  = total - cart[discIndex].quantity * cart[discIndex].price + discPrice
    } else {
        let totalPrice = cart[discIndex].quantity * cart[discIndex].price
        document.querySelector(`tr[data-id="${cart[discIndex].id}"] td:nth-child(4)`).textContent = totalPrice
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}