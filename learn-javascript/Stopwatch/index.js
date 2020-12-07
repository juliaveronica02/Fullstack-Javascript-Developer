// second = select html have paragraf tag and id class is sec.
let sec = document.querySelector("p #sec");
// minute = select html have paragraf tag and id class is min.
let min = document.querySelector("p #min");
// hours = select html have paragraf tag and id class is hr.
let hr = document.querySelector("p #hr");
// start button = select html have container on div tag and id class is startBtn.
let startBtn = document.querySelector(".container #startBtn");

// start from 00:00:00.
let Interval;
let ss = 0;
let mm = 0;
let hh = 0;

// stop the stopwatch.
function stop(){
    clearInterval(Interval);
    startBtn.style.pointerEvents = "visible";
}
// start the stopwatch.
function start(){
    // when already start can't click start again if you want to stop press stop first and 
    // then if you want the timer to continue just press start.
    startBtn.style.pointerEvents = "none";
    Interval = setInterval(()=>{
        if(ss < 59){
            ss +=1;
            ss <10 ? sec.innerHTML = "0" + ss : sec.innerHTML = ss;
        }
        else{
            ss = 0
            ss < 10 ? sec.innerHTML = "0" +ss : sec.innerHTML = ss;
            if(mm <59){
                mm += 1
                mm < 10 ? min.innerHTML = "0" + mm : min.innerHTML = mm
            }
            else {
                hh += 1;
                hh < 10 ? hr.innerHTML = "0" + hh : hr.innerHTML = hh;
            }
        }
    }, 1000)
}