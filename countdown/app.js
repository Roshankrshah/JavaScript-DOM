const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 11, 30, 0);

//const futureDate = new Date(tempYear, tempMonth, tempDay, 13, 10, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const weekday = weekdays[futureDate.getDay() - 1];
const date = futureDate.getDate();

giveaway.innerHTML = `Releasing on ${weekday}, ${date} ${month}, ${year}, ${hours}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecond);

    const values = [days,hours,minutes,seconds];
    function format(item){
        if(item<10){
            return item = `0${item}`;
        }
        return item;
    }
    items.forEach((item,index)=>{
        item.innerHTML = format(values[index]);
    })

    if(t<0){
        clearInterval(coutdown);
        deadline.innerHTML = `<h4 class='expired'>Released, Now Playing in your nearest cinemas</h4>`;
    }
}

let coutdown = setInterval(getRemainingTime,1000);

//getRemainingTime();