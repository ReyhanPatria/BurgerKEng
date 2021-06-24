const DATA_STORAGE = "DATA_STORAGE";
const CART_STORAGE = "CART_STORAGE";
let cart = []
let allOrders = []
const cartRow = document.getElementById('cart-body')


window.onload = function(){
    init()
    printCart()
}

function init(){

    if(localStorage.getItem(CART_STORAGE)){
        cart = JSON.parse(localStorage.getItem(CART_STORAGE));
    }
    if(localStorage.getItem(DATA_STORAGE)){
        allOrders = JSON.parse(localStorage.getItem(DATA_STORAGE));
    }

}

function order(){

    var error = 0
    if(checkName()==-999){
        error++;
    }
    if (checkEmail()==-999){
        error++;
    }
    if(checkPhone()==-999){
        error++;
    }
    if(checkAddress()==-999){
        error++;
    // } else if(checkMenu()){
    //     error++;
    }
    if(checkType()==-999){
        error++;
    }

 
    // console.log(cart)
    if(error==0 && cart.length!=0){
        var transaction = {name:checkName(), email:checkEmail(), phone:checkPhone(), address:checkAddress(), type:checkType(), orders:cart}
        allOrders.push(transaction)
        alert("Your order is being processed!")
        cart=[]
        localStorage.setItem(DATA_STORAGE, JSON.stringify(allOrders));
        localStorage.removeItem(CART_STORAGE)
        location.reload();
    } else {
        error=0;
        return false;
    }
    
}

function checkName(){
    var n = document.forms["submit_form"]["name"].value;
    document.getElementById('name_error').innerHTML = '';
    if(n==null|| n==""){
        // alert("Name must be filled out");
        document.getElementById('name_error').innerHTML = 'Name must be filled out';
        return -999;
    } else if(n.length >= 25){
        document.getElementById('name_error').innerHTML = 'Name is too long';
        return -999;
    } else if (!isNaN(n)){
        document.getElementById('name_error').innerHTML = 'Name needs letters';
        return -999;
    } else {
        return n;
    }
}

function checkEmail(){
    var n = document.forms["submit_form"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if(n==null|| n==""){
        // alert("Email must be filled out");
        document.getElementById('email_error').innerHTML = 'Email must be filled out';
        return -999;
    } else if(!n.includes('@') || !n.endsWith('.com') || n.length <=6 || n.includes('.@') || n.includes('@.') || n.includes('..') || n[0]=='.' || n[0]=='@' || n.includes('@@') ){
        document.getElementById('email_error').innerHTML = 'Email format is wrong';
        return -999;
    } else {
        return n;
    }
}

function checkPhone(){
    var n = document.forms["submit_form"]["phone"].value;
    document.getElementById('phone_error').innerHTML = '';
    if(n==null|| n==""){
        // alert("Phone must be filled out");
        document.getElementById('phone_error').innerHTML = 'Phone must be filled out';
        return -999;
    } else if (isNaN(n)){
        document.getElementById('phone_error').innerHTML = 'Numbers only';
        return -999;
    } else if (n.length <10){
        document.getElementById('phone_error').innerHTML = 'Must have at least 10 numbers';
        return -999;
    } else {
        return n;
    }
}

function checkAddress(){
    var n = document.forms["submit_form"]["address"].value;
    document.getElementById('address_error').innerHTML = '';
    if(n==null|| n==""){
        // alert("Address must be filled out");
        document.getElementById('address_error').innerHTML = 'Address must be filled out';
        return -999;
    } else if(n.length >= 150){
        document.getElementById('address_error').innerHTML = 'Address is too long';
        return -999;
    } else {
        return n;
    }
}

function checkType(){
    var n = document.getElementById("typeSelect").value;
    document.getElementById('serve_error').innerHTML = '';
    if(n=="0"){
        // alert("Please choose a menu");
        document.getElementById('serve_error').innerHTML = 'Please select a serve type';
        return -999;
    } else {
        return n;
    }
}

function printCart() {

    // console.log(cartRow)

    cartRow.innerHTML = ""
    cart.forEach(item=>{
        // console.log(item.imageSrc)
        // console.log(item.name)
        // console.log(item.price)
        cartRow.innerHTML += `
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${item.imageSrc}" width="100" height="100">
                <span class="cart-item-title">${item.name}</span>
            </div>
            <div class="cart-price cart-column">${item.price}</div>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" onchange="quantityChanged(this)" type="number" value="${item.jumlah}">
                <button class="btn btn-danger" onclick="removeCartItem(this)" type="button">REMOVE</button>
            </div>
        </div>
        `
    })
    updateCartTotal()
    // console.log(cartRow)
}


function updateCartTotal() {
    var cartItemContainer = document.getElementById('cart-body')
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    cart = []
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var title = cartRow.getElementsByClassName('cart-item-title')[0]
        var imageSrc = cartRow.getElementsByClassName('cart-item-image')[0]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var priceTemp = priceElement.innerText.replace('IDR ','')
        var price = parseFloat(priceTemp)
        var quantity = quantityElement.value
        total = total + (price * quantity)
        const item = {name:title.innerText, price:priceElement.innerText, imageSrc:imageSrc.src, jumlah:quantityElement.value}
        cart.push(item)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'IDR ' + total + 'K'
    localStorage.setItem(CART_STORAGE, JSON.stringify(cart))

}

function removeCartItem(event) {
    var buttonClicked = event
    console.log(buttonClicked)
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    // console.log(event)
    var input = event
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}