import { getStorageItem,setStorageItem,formatPrice,getElement } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id)=>{
    let item = cart.find((cartItem)=>cartItem.id === id);
    if(!item){
        let product = findProduct(id);
        product = {...product,amount:1};
        cart = [...cart, product];
        addToCartDOM(product);
    }else{
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
        const newAmount = items.find((value)=> value.dataset.id === id);
        newAmount.textContent = amount;
    }
    displayCartItemCount();

    displayCartTotal();

    setStorageItem('cart',cart);

    openCart();
};

function displayCartItemCount(){
    const amount = cart.reduce((total,cartItem)=>{
        return (total += cartItem.amount);
    },0);
    cartItemCountDOM.textContent = amount;
}

function displayCartTotal(){
    let total = cart.reduce((total,cartItem)=>{
        return (total += cartItem.price *cartItem.amount);
    },0);
    cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemDOM(){
    cart.forEach((cartItem)=>{
        addtoCartDOM(cartItem);
    });
};

function removeItem(id){
    cart = cart.filter((cartItem)=> cartItem.id !== id);
}

function increaseAmount(id){
    let newAmount;
    cart = cart.map((cartItem)=>{
        if(cartItem.id === id){
            newAmount = cartItem.amount +1;
            cartItem = {...cartItem,amount:newAmount};
        }
        return cartItem;
    });
    return newAmount;
}

function decreaseAmount(id){
    let newAmount;
    cart = cart.map((cartItem)=>{
        if(cartItem.id === id){
            newAmount = cartItem.amount -1;
            cartItem = {...cartItem,amount:newAmount};
        }
        return cartItem;
    });
    return newAmount;
}

function setupCartFunctionality(){
    cartItemsDOM.addEventListener('click',(e)=>{
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentId = e.target.parentElement.dataset.id;

        if(element.classList.contains('cart-item-remove-btn')){
            removeItem(id);
            element.parentElement.parentElement.remove()
        }

        if(parent.classList.contains('cart-item-increase-btn')){
            const newAmount = increaseAmount(parentId);
            parent.nextElementSibling.textContent = newAmount;
        }

        if(parent.classList.contains('cart-item-decrease-btn')){
            const newAmount = decreaseAmount(parentId);
            if(newAmount===0){
                removeItem(parentId);
                parent.parentElement.parentElement.remove();
            }else{
                parent.previousElementSibling.textContent = newAmount;
            }
        }
        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart',cart);
    });
}

const init = ()=>{
    displayCartItemCount();
    displayCartTotal();
    displayCartItemDOM();
    setupCartFunctionality();
};

init();