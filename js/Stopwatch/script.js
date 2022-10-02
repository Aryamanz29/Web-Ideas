let sec = '00';
let millisec = '00';
let appendsec = document.querySelector('.sec');
let appendmillisec = document.querySelector('.millisec');
let buttonStart = document.querySelector('.start');
let buttonStop = document.querySelector('.stop');
let buttonReset = document.querySelector('.reset');
let interval;

function startTimer() {
    millisec++;

    if(millisec<=9){
        appendmillisec.innerHTML = '0' + millisec;
    }
    if(millisec>9){
        appendmillisec.innerHTML = millisec;
    }
    if(millisec>99){
        sec++;
        appendsec.innerHTML = '0' + sec;
        millisec = 0;
        appendmillisec.innerHTML = '0' + 0;
    }
    if(sec>9){
        appendsec.innerHTML = sec;
    }
}

buttonStart.onclick = function() {
    if(interval) { 
        clearInterval(interval);
     }
    interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function() {
    clearInterval(interval);
};

buttonReset.onclick = function() {
    clearInterval(interval);
    millisec = '00';
    sec = '00';
    appendmillisec.innerHTML = millisec;
    appendsec.innerHTML = sec;
};