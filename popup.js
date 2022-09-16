/** @format */

let defaultTimer =25;
let time = defaultTimer * 60
let stopBtn = document.querySelector('#stop-btn')
const counter = document.querySelector('#timer')
const halt = document.querySelector('#shortbreak')
const cease = document.querySelector('#longbreak')

let minutes 
let seconds 
let pause 



const changeTimer = () => {
	const minutes = Math.floor(time / 60)
	let seconds = time % 60
	seconds: seconds < 10 ? '0' + seconds : seconds
	counter.innerHTML = `${minutes}:${seconds}`
	time--
}
let startBtn = document.querySelector('#start-btn')
let repeater

startBtn.addEventListener('click', function () {
	repeater = setInterval(changeTimer, 1000)
})

stopBtn.addEventListener('click', () => {
	clearInterval(repeater)
})

document.addEventListener('click', (e) => {
	if (!e.target.matches('.btn')) return
	if (e.target.matches('#shortbreak')) {
		counter.innerHTML = '5:00'
          defaultTimer =5;
          time=defaultTimer*60;
 
	} else if (e.target.matches('#longbreak')) {
		counter.innerHTML = '15:00'
        defaultTimer=15;
        time=defaultTimer*60;
	}
})
