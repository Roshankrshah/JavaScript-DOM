let filterProducts = [...products];

const productsContainer =document.querySelector('.products-container');

const displayProducts = () =>{
    if(filterProducts.length<1){
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }

    productsContainer.innerHTML = filterProducts.map((product)=>{
        const {id, title, image, price} = product;
        return `
            <article class="product" data-id="${id}">
                <img src="${image}" class="product-img img" alt="">
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">${price}</span>
                </footer>
            </article>`
    }).join("");
}

displayProducts();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup',()=>{
    const inputValue = searchInput.value;
    filterProducts = products.filter((product)=>{
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

const companiesDOM = document.querySelector('.companies');

const displayButton = ()=>{
    const buttons = ['all',
    ...new Set(products.map((product)=>product.company))];

    companiesDOM.innerHTML = buttons.map((company)=>{
        return `<button class='company-btn' data-id='${company}'>${company}</button>`;
    }).join('');
}

displayButton();

companiesDOM.addEventListener('click',(e)=>{
    const ele = e.target;
    console.log("hi");
    if(ele.classList.contains('company-btn')){
        if(ele.dataset.id ==='all'){
            filterProducts = [...products];
        }
        else{
            filterProducts = products.filter((product)=>{
                return product.company === ele.dataset.id;
            });
        }
        searchInput.value = '';
        displayProducts();
    }
});

