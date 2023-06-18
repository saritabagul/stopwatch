let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let min = 0;
let sec = 0;
let ms = 0;

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;    	
	min = 0;
	sec = 0;
	ms = 0;
	
    document.getElementById('stopwatch').innerHTML = "00:00:00";

});

function stopWatch() {
	if (timer) {
		ms++;

		if (ms == 100) {
			sec++;
			ms = 0;
		}

		if (sec == 60) {
			min++;
			sec = 0;
		}		

		
		let minString = min;
		let secString = sec;
		let msString = ms;

		if (min < 10) {
			minString = "0" + minString;
		}

		if (sec < 10) {
			secString = "0" + secString;
		}

		if (ms < 10) {
			msString = "0" + msString;
		}

		document.getElementById('stopwatch').innerHTML = minString + ':'+ secString + ':'+msString;
		setTimeout(stopWatch, 10);
	}
}
