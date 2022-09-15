const defaultTimer=25;
let time=defaultTimer*60;
let stopBtn=document.querySelector("#stop-btn")
const counter=document.querySelector('#timer');



const changeTimer=()=>{
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds:seconds < 10 ? "0"+ seconds : seconds
    counter.innerHTML=`${minutes}:${seconds}`;
   time--;
}
let startBtn=document.querySelector('#start-btn');
let repeater;

startBtn.addEventListener('click',function (){
   repeater= setInterval(changeTimer,1000)
});

stopBtn.addEventListener("click",()=>{
    clearInterval(repeater)
});

