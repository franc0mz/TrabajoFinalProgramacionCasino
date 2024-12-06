import { Casino } from "./Casino";

import { MaquinaDeJuego } from "./MaquinaDeJuego";


export class Tragamoneda extends MaquinaDeJuego{
       
    public apuesta: number;
    public multiplicador:number;
    constructor(nombre: string) {
        super(nombre)  
        this.apuesta= 5; //apuesta predeterminada
        this.multiplicador= 2; //multiplicador predeterminado
    }

    
    public setApuesta(apuesta : number) {
        this.apuesta = apuesta;
    }
    public setMuliplicador(multiplicador:number){
        this.multiplicador=multiplicador;
    }

   
    numeroRandom() {
        let numeroRandom = Math.random() * 3;
        return Math.round(numeroRandom);
    }

    juego(casino : Casino) {
        if (casino.getSaldo()-this.apuesta >= 0) { //modifique esto

            let numero1: number = this.numeroRandom();
            let numero2: number = this.numeroRandom();
            let numero3: number = this.numeroRandom();


            //numero1 = this.numeroRandom();
            //numero2 = this.numeroRandom()
            //numero3 = this.numeroRandom()
            console.log(numero1, numero2, numero3);

            if (numero1 == numero2 && numero2 == numero3) {
                console.log("GANASTE");
                casino.setSaldo( casino.saldo+ this.apuesta*this.multiplicador)
                console.log(casino.saldo)


            } else {
                console.log("QUE MALA SUERTE, INTENTA DE NUEVO");
                 casino.setSaldo(casino.saldo-this.apuesta)
                 console.log(casino.saldo)
            }
        }else {
            console.log("Saldo insuficiente")
        }
    }



}