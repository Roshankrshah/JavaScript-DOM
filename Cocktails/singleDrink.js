import fetchDrinks from "./src/fetchDrinks.js";
import displayDrinks from "./src/displaySingleDrinks.js";

const presentDrink = async()=>{
    const id = localStorage.getItem('drink');
    if(!id){
        window.location.replace('index.html');
    }else{
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrinks(drink);
    }
};

window.addEventListener('DOMContentLoaded',presentDrink);