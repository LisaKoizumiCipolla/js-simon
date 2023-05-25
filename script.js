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


// ending of countdown
const endOfTime = new Date("May 26, 2023 09:30:00");
//literally now
let now = new Date();
console.log(now);

//time span between now and ending
let totalTime = endOfTime - now;
timeCalc();

//make time proceed
function timePassing(){
    totalTime = totalTime - 1000;
    timeCalc();
}

//remaining time until the end
const remainingTime = setInterval(timePassing, 1000);
console.log(remainingTime);

//When everything stops
setTimeout(function(){
        clearInterval(remainingTime);
        alert ("You died!");
        }, totalTime + 100);
    

function timeCalc(){

    //calculation from ms
    let seconds = Math.floor(totalTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    
    //all the time class to variable
    let secondCounter = document.querySelector(".seconds-counter");
    secondCounter.innerHTML = seconds.toString().padStart(2,0);
    
    let minuteCounter = document.querySelector(".minutes-counter");
    minuteCounter.innerHTML = minutes.toString().padStart(2,0);
    
    let hourCounter = document.querySelector(".hours-counter");
    hourCounter.innerHTML = hours.toString().padStart(2,0);
}