const DATA_STORAGE = "DATA_STORAGE";
let cart = []

window.onload = function(){
    initCart();
}

function initCart(){

    if(localStorage.getItem(CART_STORAGE)){
        cart = JSON.parse(localStorage.getItem(CART_STORAGE));
    }

}

function order(){

    var error = 0;
    if(checkName()){
        error++;
    } else if (checkEmail()){
        error++;
    } else if(checkPhone()){
        error++;
    } else if(checkAddress()){
        error++;
    } else if(checkMenu()){
        error++;
    } else if(checkType()){
        error++;
    } 
    
    if(error==0){
        // localStorage.setItem(DATA_STORAGE, JSON.stringify(cart));
    } else {
        return false;
    }
    
}

function checkName(){
    var n = document.forms["submit_form"]["name"].value;
    document.getElementById('name_error').innerHTML = '';
    if(n==null|| n==""){
        // alert("Name must be filled out");
        document.getElementById('name_error').innerHTML = 'Name must be filled out';
        return true;
    } else {
        return false;
    }
}

function checkEmail(){
    var n = document.forms["submit_form"]["email"].value;
    document.getElementById('email_error').innerHTML = '';
    if(n==null|| n==""){
        alert("Email must be filled out");
        document.getElementById('email_error').innerHTML = 'Email must be filled out';
        return true;
    } else {
        return false;
    }
}

function checkPhone(){
    var n = document.forms["submit_form"]["phone"].value;
    document.getElementById('phone_error').innerHTML = '';
    if(n==null|| n==""){
        alert("Phone must be filled out");
        document.getElementById('phone_error').innerHTML = 'Phone must be filled out';
        return true;
    } else {
        return false;
    }
}

function checkAddress(){
    var n = document.forms["submit_form"]["address"].value;
    if(n==null|| n==""){
        alert("Address must be filled out");
        return true;
    } else {
        return false;
    }
}

function checkMenu(){
    var n = document.getElementById("menuSelect").value;
    if(n=="0"){
        alert("Please choose a menu");
        return true;
    } else {
        return false;
    }
}

function checkType(){
    var n = document.getElementById("typeSelect").value;
    if(n=="0"){
        alert("Please choose a menu");
        return true;
    } else {
        return false;
    }
}