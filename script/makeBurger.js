let burger = {
    bun: "",
    meat: "",
    veggie: "no veggie",
    sauce: []
}

const CART_STORAGE = "CART_STORAGE";
let cart = []

window.onload = function(){
    document.getElementById('veggie-no').checked = true
    initCart()
}

function initCart(){
    if(localStorage.getItem(CART_STORAGE)){
        cart = JSON.parse(localStorage.getItem(CART_STORAGE));
    }
}

/* BUN */

function changeBun() {
    if (document.getElementById('bun-reg').checked === true) {
        document.getElementById('wheatTop').classList.add("hidden");
        document.getElementById('wheatBot').classList.add("hidden");
        document.getElementById('regTop').classList.remove("hidden");
        document.getElementById('regBot').classList.remove("hidden");
        burger.bun = "reguler";
    }
    else {
        document.getElementById('regTop').classList.add("hidden");
        document.getElementById('regBot').classList.add("hidden");
        document.getElementById('wheatTop').classList.remove("hidden");
        document.getElementById('wheatBot').classList.remove("hidden");
        burger.bun = "wheat";
    }

    console.log(burger);
}

/* MEAT */

let meatsID = ['beef-img', 'chicken-img', 'fish-img'];

function changeMeat() {
    meatsID.forEach(meat => document.getElementById(meat).classList.add("hidden"));

    if (document.getElementById('meat-beef').checked === true) {    
        document.getElementById('beef-img').classList.remove("hidden");
        burger.meat = "beef";
    }
    else if (document.getElementById('meat-chicken').checked === true) {    
        document.getElementById('chicken-img').classList.remove("hidden");
        burger.meat = "chicken";
    }
    else {    
        document.getElementById('fish-img').classList.remove("hidden");
        burger.meat = "fish";
    }

    console.log(burger);
}

/* SAUCE */

let saucesID = ['mush-img', 'bbq-img', 'chilli-img', 'cheese-img'];
let status = [false, false, false, false]

function changeSauce(id) {
    saucesID.forEach(sauce => document.getElementById(sauce).classList.add("hidden"));

    let count = 0;

    if(status[id] === false) {
        status[id] = true;
    }
    else {
        status[id] = false;

        if(id === 0) document.getElementById('sauce-mush').checked = false;
        else if(id === 1) document.getElementById('sauce-bbq').checked = false;
        else if(id === 2) document.getElementById('sauce-chilli').checked = false;
        else document.getElementById('sauce-cheese').checked = false;
    }

    let sauces = [];
    
    if (document.getElementById('sauce-mush').checked === true) {    
        document.getElementById('mush-img').classList.remove("hidden");
        sauces.push("mushroom");
        count++;
    }
    if (document.getElementById('sauce-bbq').checked === true) {    
        document.getElementById('bbq-img').classList.remove("hidden");
        sauces.push("BBQ");
        count++;
    }
    if (document.getElementById('sauce-chilli').checked === true) {    
        document.getElementById('chilli-img').classList.remove("hidden");
        sauces.push("chilli");
        count++;
    }
    if (document.getElementById('sauce-cheese').checked === true) {    
        document.getElementById('cheese-img').classList.remove("hidden");
        sauces.push("cheese");
        count++;
    }

    if(count > 1) {
        saucesID.forEach(sauce => document.getElementById(sauce).classList.add("hidden"));
        document.getElementById('custom-img').classList.remove("hidden");
    }

    burger.sauce = sauces;

    console.log(status);
    console.log(burger);
}

/* VEGGIE */

function changeVeggie() {
    if (document.getElementById('veggie-yes').checked === true) {
        document.getElementById('veggie').classList.remove("hidden");
        burger.veggie = "w/ veggie";
    }
    else {
        document.getElementById('veggie').classList.add("hidden");
        burger.veggie = "no veggie";
    }

    console.log(burger);
}

/* ADD */

function addToCart() {
    if(burger.bun == "") {
        alert("Must select bun type!");
        return;
    }
    if(burger.meat == "") {
        alert("Must select meat type!");
        return;
    }

    finalSauces = "no";
    first = true;

    burger.sauce.forEach(sauce => {
        if(first) {
            finalSauces = "";
            finalSauces += sauce;
            first = false;
        }
        else finalSauces += (", " + sauce);
    });

    finalName = burger.bun + " bun " + burger.meat + " burger (" + burger.veggie + ") with " + finalSauces + " sauces";

    var item = {name:finalName, price:"IDR 55K", imageSrc:"../sprites/create_burger/customBurger.png"}

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
    location.reload()
}
