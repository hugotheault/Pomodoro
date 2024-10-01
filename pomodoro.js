const MINUTETRAVAIL = 0;
const SECONDTRAVAIL = 5;

const MINUTEPAUSE = 0;
const SECONDPAUSE = 2;

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
    bar.animate(1.0);
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
        bg.style.backgroundColor="#8fdd57";
        bar.duration = 200;
        bar.animate(0.1);
        
        bar.duration = (MINUTEPAUSE*60+SECONDPAUSE)*1000;
        
        bar.animate(1.0);
        // bar.animate(1.0);
    }else if(m == 0 && s == 0 && travail == false){
        travail = true;
        m = MINUTETRAVAIL;
        s = SECONDTRAVAIL;
        bg.style.backgroundColor="#ff5d39";
        // bar.animate(((MINUTETRAVAIL*60+SECONDTRAVAIL)-(m*60+s))/MINUTETRAVAIL*60+SECONDTRAVAIL);
        bar.duration = (MINUTETRAVAIL*60+SECONDTRAVAIL)*1000;
        bar.location = 0;
        bar.animate(1.0);
    }

}

function timerBack(){
    location.reload();
}

function caractere(nb)
{ 
    return (nb < 10) ? '0'+nb : nb;
}

var bar = new ProgressBar.Circle(container, {
    strokeWidth: 3,
    duration: (MINUTETRAVAIL*60+SECONDTRAVAIL)*1000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });

  bar.timerBack = 100;
  
  
  