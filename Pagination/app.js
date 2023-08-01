import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displatButtons.js";
const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index =0;
let pages=[];

const setUI = ()=>{
    displayFollowers(pages[index]);
    displayButtons(btnContainer,pages,index);
};

const init = async ()=>{
    const followers = await fetchFollowers();
    title.textContent = 'pagination';
    pages = paginate(followers);
    setUI();
}

btnContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-container'))    return;
    if(e.target.classList.contains('page-btn')){
        index = parseInt(e.target.dataset.index)
    }
    if(e.target.classList.contains('next-btn')){
        index++;
        if(index>pages.length-1){
            index = 0;
        }
    }
    if(e.target.classList.contains('prev-btn')){
        index--;
        if(index<0){
            index = pages.length-1;
        }
    }
    setUI();
});

window.addEventListener('load',init);
