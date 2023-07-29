import fetchDrinks from "./fetchDrinks";
import displayDrinks from "./displayDrinks";
import setDrink from "./setDrink";

const showDrinks = async(url)=>{
    const data = await fetchDrinks(url);

    const section = await displayDrinks(data);
    if(section){
        setDrink(section);
    }
};

export default showDrinks;