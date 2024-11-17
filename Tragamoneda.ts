import { Casino } from "./Casino";
import { Sesion } from "./Sesion";

export class Tragamoneda {
    static juego() {
        throw new Error('Method not implemented.');
    }

    public nombre: string;
    public apuesta: number;
    constructor(nombre: string) {
        this.nombre = nombre;
        this.apuesta= 5;
    }

    
    public setApuesta(apuesta : number) {
        this.apuesta = apuesta;
    }
    
    numeroRandom() {
        let numeroRandom = Math.random() * 3;
        return Math.round(numeroRandom);
    }

    juego(casino : Casino , saldo: number) {
        if (casino.getSaldo() >= 0) {

            let apuesta :number= 5;
            let numero1: number;
            let numero2: number;
            let numero3: number;


            numero1 = this.numeroRandom();
            numero2 = this.numeroRandom()
            numero3 = this.numeroRandom()
            console.log(numero1, numero2, numero3);

            if (numero1 == numero2 && numero2 == numero3) {
                console.log("GANASTE");
                casino.setSaldo( casino.saldo+ apuesta*2)
                console.log(casino.saldo)


            } else {
                console.log("QUE MALA SUERTE, INTENTA DE NUEVO");
                 casino.setSaldo(casino.saldo-apuesta)
                 console.log(casino.saldo)
            }
        }else {
            console.log("saldo insuficiente")
        }
    }



}
