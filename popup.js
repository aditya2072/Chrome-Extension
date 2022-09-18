/** @format */

let defaultTimer = 25;
let time = defaultTimer * 60;
let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
const counter = document.querySelector("#timer");
const focus = document.querySelector("#work");
const halt = document.querySelector("#shortbreak");
const cease = document.querySelector("#longbreak");
let audioFocus = new Audio("./sounds/focussound.mp3");
let audioLongBreak = new Audio("./sounds/calm.mp3");
let audioStartBtn = new Audio("./sounds/start.mp3");
let audioStopBtn = new Audio("./sounds/stopbtn.mp3");

chrome.storage.local.get(["remainingSec", "startTime"], function (result) {
  if (result.remainingSec && result.startTime) {
    let popupOffDuration = (new Date().getTime() - result.startTime) / 1000;
    let popupTime = result.remainingSec - popupOffDuration;
    if (popupTime > 0) {
      time = popupTime;
      changeTimer();
	  startTimer();
    }
  }
});

let repeater;
startBtn.addEventListener("click", startTimer);

function startTimer() {
  if (repeater) {
    clearInterval(repeater);
  }
  repeater = setInterval(changeTimer, 1000);
  audioStartBtn.play();
  chrome.storage.local.set(
    { remainingSec: time, startTime: new Date().getTime() },
    function () {}
  );
}

stopBtn.addEventListener("click", () => {
  clearInterval(repeater);
  audioStopBtn.play();
  audioFocus.pause();
  audioLongBreak.pause();
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".btn2")) return;
  if (e.target.matches("#work")) {
    counter.innerHTML = "25:00";
    defaultTimer = 25;
    time = defaultTimer * 60;
    audioFocus.play();
	clearInterval(repeater);
    document.body.style.backgroundColor = "#92eeb7aa";
  } else if (e.target.matches("#shortbreak")) {
    counter.innerHTML = "5:00";
    defaultTimer = 5;
    time = defaultTimer * 60;
    document.body.style.backgroundColor = "black";
  } else if (e.target.matches("#longbreak")) {
    counter.innerHTML = "15:00";
    defaultTimer = 15;
    time = defaultTimer * 60;
    audioLongBreak.play();
    document.body.style.backgroundColor = "#FFFF00";
  }
});

const changeTimer = () => {
  const minutes = Math.floor(time / 60);
  let seconds = Math.round(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  counter.innerHTML = `${minutes}:${seconds}`;
  time--;
};
