var minute = 0;
var second = 0;
var milisecond = 0;
var Min = document.getElementById("min");
var Sec = document.getElementById("sec");
var MSec = document.getElementById("msec");
var inteval;

function stopwatch(){
    milisecond++
    MSec.innerHTML= milisecond;
    if(milisecond>= 100){
        second++
        Sec.innerHTML = second;
        milisecond = 0;
    }else if(second >= 60){
        minute++
        second = 0;
        Min.innerHTML = minute;
    }
}
//interval = setInterval(stopwatch,10);

function start(){
    interval = setInterval(stopwatch,10);
}
function stop(){
    clearInterval(interval);
}
function reset(){
    minute = 0;
    second = 0;
    milisecond = 0;
    Min.innerHTML = minute;
    Sec.innerHTML = second;
    MSec.innerHTML = milisecond;
    stop();
}