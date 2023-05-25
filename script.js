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



const endOfTime = new Date("May 25, 2023 09:30:00")

let totalTime;

const remainingTime = setInterval(timePassing, 1000);

function timePassing(){
    totalTime--;
}

















