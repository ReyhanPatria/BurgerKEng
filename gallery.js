const CART_STORAGE = "CART_STORAGE";
let cart = []

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    initCart()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

window.onload = function(){
    initCart()
}

function initCart(){
    if(localStorage.getItem(CART_STORAGE)){
        cart = JSON.parse(localStorage.getItem(CART_STORAGE));
    }
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    
    var item = {name:title, price:price, imageSrc:imageSrc}

    const checkCart = cart.find(key => {
        return item.name == key.name
    })

    if(checkCart == undefined){
        item["jumlah"] = 1        
        cart.push(item)
        alert("Added to cart!")
    }
    else{
        checkCart.jumlah++;
        alert("You have "+ checkCart.jumlah + " items in the cart!")
    }
    localStorage.setItem(CART_STORAGE, JSON.stringify(cart))


}

