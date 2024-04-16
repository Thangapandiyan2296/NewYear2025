const CurrentYear = new Date().getFullYear();

function UpdateTime()
{
    const CurrentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${CurrentYear+1} 00:00:00` );
    currentDate = new Date();
    const diff = newYear - currentDate;

    const day = Math.floor(diff/1000/60/60/24);
    const hour = Math.floor(diff/1000/60/60)%24;
    const minutes = Math.floor(diff/1000/60)%60;
    const seconds = Math.floor(diff/1000)%60;

    // console.log( day+" "+" "+hour+" "+minutes+" "+seconds);

    const d = document.querySelector("#d") 
const h = document.querySelector("#h")
const m = document.querySelector("#m")
const s = document.querySelector("#s")

d.innerHTML = day<10?"0"+day:day;
h.innerHTML = hour<10?"0"+hour:hour;
m.innerHTML = minutes<10?"0"+minutes:minutes;
s.innerHTML = seconds<10?"0"+seconds:seconds;

}
setInterval(UpdateTime,1000);

body = document.querySelector("#body") 

if(CurrentYear == 2025)
{
    
}
