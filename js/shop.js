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
let cart = [];
let total = 0;

// Exercise 1
function updateCart() {
    applyPromotionsCart()
    printCart()
    calculateTotal() 
}

function buy(id) {
    let productFound = false
    let position = -1

    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
           position = i;
           break;
        }
    }
    for (let k = 0; k < cart.length; k++) {
        if (products[position].id === cart[k].id) {
            cart[k].quantity += 1
            productFound = true
        } 
    }         
    
    if (productFound == false ) {
        cart.push({...products[position], quantity: 1})
    } 
    updateCart()
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
    total = 0
    
    for (let i = 0; i < cart.length; i++) {
        let cellPrice = cart[i].price * cart[i].quantity
        if (cart[i].offerPrice) {
            if (cart[i].quantity > cart[i].offer.number) {
                cellPrice = cart[i].quantity * cart[i].offerPrice      
        }
    }
        total +=  cellPrice
    }
         document.getElementById('total_price').innerHTML  = total
    
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let discountProduct = -1

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].offer) {
            discountProduct = i;
        }
    }
    if (discountProduct != -1) {
        let discount20 = cart[discountProduct].price * (1 - (cart[discountProduct].offer.percent/100))
        cart[discountProduct].offerPrice = discount20
    } 
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list')
    cartList.innerHTML = ''

    cart.forEach(item => {
        const row = document.createElement('tr')
        
        const productCell = document.createElement('th')
        productCell.scope = 'row'
        productCell.textContent = item.name

        const priceCell = document.createElement('td')
        priceCell.textContent = item.price

        if(item.offerPrice) {
              if (item.quantity > item.offer.number) {
                priceCell.textContent = item.offerPrice 
            }
        } 

        const quantityCell = document.createElement('td')

        const minusButton = document.createElement('button')
        minusButton.textContent = '-'
        minusButton.classList.add('btn', 'btn-secondary', 'btn-sm', 'btn-centered')
        minusButton.style.marginRight = '10px'; 
        minusButton.style.width = '27px';
        minusButton.style.height = '32px';
        minusButton.onclick = () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else if (item.quantity == 1) {
                cart = cart.filter(cartItem => cartItem.id !== item.id);  
            }
                updateCart();
        }
        
        const quantityText = document.createElement('span')
        quantityText.textContent = item.quantity
        quantityText.classList.add('quantity-text')

        const plusButton = document.createElement('button')
        plusButton.textContent = '+'
        plusButton.classList.add('btn', 'btn-secondary', 'btn-sm', )
        plusButton.style.marginLeft = '10px'; 
        plusButton.onclick = () => { 
            item.quantity += 1;
            updateCart();
        }        
                  
        quantityCell.appendChild(minusButton)
        quantityCell.appendChild(quantityText)
        quantityCell.appendChild(plusButton)
        

        const totPriceCell = document.createElement('td')
        totPriceCell.textContent = (item.price * item.quantity).toFixed(2)
    
        if(item.offerPrice) {
            if (item.quantity > item.offer.number) {
                totPriceCell.textContent = item.offerPrice * item.quantity
            }
        } 
        
        row.appendChild(productCell)
        row.appendChild(priceCell)
        row.appendChild(quantityCell)
        row.appendChild(totPriceCell)
 
        cartList.appendChild(row)
    })

    document.getElementById('total_price').innerHTML  = total

    let cartQuantity = cart.reduce((tot, item) => {return tot + item.quantity}, 0)
    document.getElementById('count_product').innerHTML = cartQuantity
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    
}

function open_modal() {
    /* printCart(); */
}