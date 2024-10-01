// Définition des différents constantes utilisés
const MINUTETRAVAIL = 25;
const SECONDTRAVAIL = 0;

const MINUTEPAUSE = 5;
const SECONDPAUSE = 0;

// Définition des différentes variables
let m = MINUTETRAVAIL;
let s = SECONDTRAVAIL;

let travail = true;

let Timer = document.getElementById("timer");


let timerIntervalle;

let buttonStart = document.getElementById("start");
let buttonReStart = document.getElementById("reStart");

let bg = document.querySelector("html");

let phase = document.getElementById("phase");

// Premier affichage du timer
Timer.textContent = caractere(MINUTETRAVAIL)+" : "+caractere(SECONDTRAVAIL);

// Listenner sur le bouton start afin de lancer le timer
//et donc les cycles de travail
buttonStart.addEventListener('click', ()=>{
    if(timerIntervalle == null){
        timerIntervalle = setInterval(timer, 1000);
    }
    buttonStart.style.display="none";
    buttonReStart.style.display="inline-block";
    bar.animate(1.0);
    phase.textContent = "Travail";
});

// Listenner sur le bouton reStart afin de reload la page web
buttonReStart.addEventListener('click', ()=>{
    location.reload();
});

// Fonction timer, lancée dès que l'utilisateur appuie sur le bouton
// start, qui permet donc le défilement du temps ainsi que les changements
// entre les phases de travail et les phases de pause
function timer(){
    console.log(m,s);
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
        bar.duration = 20;
        bar.animate(-1);
        bar.duration = (MINUTEPAUSE*60+SECONDPAUSE)*1000;
        bar.animate(1.0);
        phase.textContent = "Pause";
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
        phase.textContent = "Travail";
    }

}

// Fontion permettant l'ajout d'un '0' au début si le nombre de minutes
// ou de secondes restantes est inférieur à 10
function caractere(nb)
{ 
    return (nb < 10) ? '0'+nb : nb;
}

// Création de la progress bar
var bar = new ProgressBar.Circle(container, {
    strokeWidth: 3,
    duration: (MINUTETRAVAIL*60+SECONDTRAVAIL)*1000,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });

