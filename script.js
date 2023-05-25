/*
function getDate(){
    const currentDate = new Date();
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return currentDate;
}

console.log(getDate());
*/



const endOfTime = new Date("May 26, 2023 09:30:00")
let now = new Date();
console.log(now);

let totalTime = endOfTime - now;
console.log(totalTime);

let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour *24;



const remainingTime = setInterval(timePassing, 1000);

function timePassing(){
    totalTime--;
}

















