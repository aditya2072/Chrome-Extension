const defaultTimer=25;
let time=defaultTimer*60;
let startBtn=document.querySelector('#start-btn');
let stopBtn=document.querySelector("#stop-btn")
const counter=document.querySelector('#timer');


const changeTimer=()=>{
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    seconds:seconds < 10 ? "0"+ seconds : seconds
    counter.innerHTML=`${minutes}:${seconds}`;
   time--;
}
startBtn.addEventListener('click',function (){
    setInterval(changeTimer,1000)
});

