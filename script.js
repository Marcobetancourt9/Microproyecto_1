const ronda = document.getElementById("ronda");
const simonBoton= document.getElementsByClassName("square");
const startBoton = document.getElementById("iniciarBoton");

class Simon{
    constructor(simonBoton, iniciarBoton, ronda){
        this.round =0;
        this.userPosition=0;
        this.totalRondas=10;
        this.secuencia=[]
        this.speed=100
        this.blockedBoton=true;
        this.botones=Array.from(simonBoton);
        this.display={
            iniciarBoton,
            ronda
        }
        this.errorSonido=new Audio(".")
        this.botonSonido=[
            new Audio(""),
            new Audio(""),
            new Audio(""),
            new Audio(""),
        ]
    }
    init() {
        this.display.iniciarBoton.onclick = () => this.iniciarJuego();
    }
    
    iniciarJuego() {
        this.display.iniciarBoton.disabled=true;
        this.updateRound(0);
        this.userPosition =0;
        this.secuencia =this.crearSecuencia();
        this.botones.forEach((element, i) =>{
            element.classList.remove("winner");
            element.onclick = () => this.botonClick(i);
        });
        this.mostrarSecuencia();
    }
    actualizarRonda(value){
        this.ronda=value;
        this.display.round.textContent=`Round ${this.ronda}`;
    }
    crearSecuencia(){
        return Array.from({length: this.totalRondas}, () => this.getRandomColor());
    }
    getRandomColor(){
        return Math.floor(Math.random()*4);
    }

    botonClick(value){
        !this.blockedBoton && this.validateChosenColor(value);
    }

    validateChosenColor(value){
        if(this.secuencia[this.userPosition]=== value){
            this.botonSonido[value].play();
            if (this.ronda === this.userPosition){
                this.updateRound(this.round+1);
                this.speed /= 1.02;
                this.isJuegoPerdido();
            }else{
                this.userPosition++;
            }
        } else{
            this.JuegoPerdido();
        }
    }
    isJuegoPerdido(){
        if (this.round === this.totalRondas){
            
        }
    }

}
const simon = new Simon(simonBoton, iniciarBoton, ronda);
simon.init();