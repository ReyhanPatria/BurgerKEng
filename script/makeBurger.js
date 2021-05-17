/* BUN */

function changeBun() {
    if (document.getElementById('bun-reg').checked === true) {
        document.getElementById('wheatTop').classList.add("hidden");
        document.getElementById('wheatBot').classList.add("hidden");
        document.getElementById('regTop').classList.remove("hidden");
        document.getElementById('regBot').classList.remove("hidden");
    }
    else {
        document.getElementById('regTop').classList.add("hidden");
        document.getElementById('regBot').classList.add("hidden");
        document.getElementById('wheatTop').classList.remove("hidden");
        document.getElementById('wheatBot').classList.remove("hidden");
    }
}

/* MEAT */

let meatsID = ['beef-img', 'chicken-img', 'fish-img'];

function changeMeat() {
    meatsID.forEach(meat => document.getElementById(meat).classList.add("hidden"));

    if (document.getElementById('meat-beef').checked === true) {    
        document.getElementById('beef-img').classList.remove("hidden");
    }
    else if (document.getElementById('meat-chicken').checked === true) {    
        document.getElementById('chicken-img').classList.remove("hidden");
    }
    else {    
        document.getElementById('fish-img').classList.remove("hidden");
    }
}

/* SAUCE */

let saucesID = ['mush-img', 'bbq-img', 'chilli-img', 'cheese-img'];

function changeSauce() {
    saucesID.forEach(sauce => document.getElementById(sauce).classList.add("hidden"));

    if (document.getElementById('sauce-mush').checked === true) {    
        document.getElementById('mush-img').classList.remove("hidden");
    }
    else if (document.getElementById('sauce-bbq').checked === true) {    
        document.getElementById('bbq-img').classList.remove("hidden");
    }
    else if (document.getElementById('sauce-chilli').checked === true) {    
        document.getElementById('chilli-img').classList.remove("hidden");
    }
    else {    
        document.getElementById('cheese-img').classList.remove("hidden");
    }
}

/* VEGGIE */

function changeVeggie() {
    if (document.getElementById('veggie-yes').checked === true) {
        document.getElementById('veggie').classList.remove("hidden");
    }
    else {
        document.getElementById('veggie').classList.add("hidden");
    }
}
