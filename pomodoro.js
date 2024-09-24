const MINUTE = 2;
const SECOND = 0;

let m = MINUTE+"";
let s = SECOND+"";
let Timer = document.getElementById("timer");
Timer.innerHTML = MINUTE+" : "+SECOND;
let timerIntervalle;
let buttonStart = document.getElementById("start");

buttonStart.addEventListener('click', ()=>{
    if(timerIntervalle == null){
        timerIntervalle = setInterval(timer, 10);
    }
});

function timer(){
    console.log(m,s)
    if(s == 0){
        m -= 1;
        s = 59;
        Timer.innerHTML = m+" : "+s;
    }else {
        s --;
        Timer.innerHTML = m+" : "+s;
    }
    if(s < 10 ){
        s = "0"+s;
        Timer.innerHTML = m+" : "+s;
    }
    if(m < 10 && s == 0){
        m = "0"+m;
        Timer.innerHTML = m+" : "+s;
    }
    if(m == 0 && s == 0){
        clearInterval(timerIntervalle);
        timerIntervalle = null;
        m = MINUTE;
        s = SECOND+"";
        Timer.innerHTML = m+" : "+s;
    }

}

