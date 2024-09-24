const MINUTETRAVAIL = 0;
const SECONDTRAVAIL = 10;

const MINUTEPAUSE = 0;
const SECONDPAUSE = 5;

let m = MINUTETRAVAIL;
let s = SECONDTRAVAIL;

let travail = true;

let Timer = document.getElementById("timer");
Timer.textContent = caractere(MINUTETRAVAIL)+" : "+caractere(SECONDTRAVAIL);

let timerIntervalle;

let buttonStart = document.getElementById("start");
let buttonReStart = document.getElementById("reStart");

let bg = document.querySelector("html");

buttonStart.addEventListener('click', ()=>{
    if(timerIntervalle == null){
        timerIntervalle = setInterval(timer, 1000);
    }
    buttonStart.style.display="none";
    buttonReStart.style.display="inline-block";
});

buttonReStart.addEventListener('click', ()=>{
    timerBack();
});


function timer(){
    console.log(m,s)
    if(s== 0){
        m-= 1;
        s= 59;
        Timer.textContent = caractere(m)+" : "+caractere(s);
    }else {
        s--;
        Timer.textContent = caractere(m)+" : "+caractere(s);
    }
    if(m== 0 && s== 0 && travail == true){
        travail = false;
        m = MINUTEPAUSE;
        s = SECONDPAUSE;
        bg.style.backgroundColor="green";
    }else if(m == 0 && s == 0 && travail == false){
        travail = true;
        m = MINUTETRAVAIL;
        s = SECONDTRAVAIL;
        bg.style.backgroundColor="red";
    }

}


function timerBack(){
    location.reload();
}

function caractere(nb)
{ 
    return (nb < 10) ? '0'+nb : nb;
}
