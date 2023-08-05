import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl,getElement,formatPrice } from '../utils.js';

const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM  = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

let productID;

window.addEventListener('DOMContentLoaded',async()=>{
    const urlID = window.location.search;

    try{
        const response = await fetch(`${singleProductUrl}${urlID}`);
        if(response.status >=200 && response.status<=299){
            const product = await response.json();
            const {id,fields} = product;

            productID = id;
            const {name,company,price, colors,description} = fields;
            const image = fields.image[0].thumbnails.large.url;

            document.title = `${name.toUpperCase()} | Comfy`;
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = `by ${company}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
            colors.forEach((color)=>{
                const span = document.createElement('span');
                span.classList.add('product-color');
                span.style.backgroundColor = `${color}`;
                colorsDOM.appendChild(span);
            });
        }else{
            centerDOM.innerHTML = `<div>
            <h3 class="error">sorry, something went wrong</h3>
            <a href="index.html" class="btn">back home</a>
            </div>`;
        }
    }catch(error){
        console.log(error);
    }
    loading.style.display = 'none';
});

cartBtn.addEventListener('click',()=>{
    addToCart(productID);
})