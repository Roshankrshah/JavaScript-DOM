import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get('.btn');

const showUser = async ()=>{
    const person = await getUser();
    displayUser(person);
};

window.addEventListener('DOMContentLoaded',showUser);
btn.addEventListener('click',showUser);