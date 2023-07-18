const items = [...document.querySelectorAll(".number")];
//const items = document.querySelectorAll(".number");
console.log(items);

const updateCount = (ele)=>{
    const value = parseInt(ele.dataset.value);
    const increment = Math.ceil(value/1000);

    let initialValue = 0;

    const increaseCount = setInterval(()=>{
        initialValue += increment;
        
        if(initialValue>value){
            ele.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        ele.textContent = `${initialValue}+`;
    },1);
}

items.forEach((item)=>{
    updateCount(item);
});