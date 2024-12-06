"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamoneda2 = void 0;
const MaquinaDeJuego_1 = require("./MaquinaDeJuego");
class Tragamoneda2 extends MaquinaDeJuego_1.MaquinaDeJuego {
    constructor(nombre) {
        super(nombre);
        this.apuesta = 5;
        this.multiplicador = 2;
    }
    setApuesta(apuesta) {
        this.apuesta = apuesta;
    }
    setMuliplicador(multiplicador) {
        this.multiplicador = multiplicador;
    }
    //ESTA SERIA OTRA OPCION PERO YA TIENE TODO HECHO ASIQUE NO CAMBIA EN NADA
    //numeroRandom(): number {
    // return Math.floor(Math.random() * 3); 
    //}
    numeroRandom() {
        let numeroRandom = Math.random() * 3;
        return Math.round(numeroRandom);
    }
    juego(casino) {
        if (casino.getSaldo() - this.apuesta >= 0) {
            let numero1 = this.numeroRandom();
            let numero2 = this.numeroRandom();
            let numero3 = this.numeroRandom();
            let numero4 = this.numeroRandom();
            let numero5 = this.numeroRandom();
            //numero1 = this.numeroRandom();
            //numero2 = this.numeroRandom();
            //numero3 = this.numeroRandom();
            //numero4 = this.numeroRandom();
            //numero5 = this.numeroRandom();
            console.log(numero1, numero2, numero3, numero4, numero5);
            if (numero1 == numero2 &&
                numero1 == numero3 &&
                numero1 == numero4 &&
                numero1 == numero5) {
                console.log("GANASTE QUINTUPLE NUMERO");
                casino.setSaldo(casino.saldo + this.apuesta * this.multiplicador * 2);
                console.log(casino.saldo);
            }
            else if ((numero1 == numero2 && numero1 == numero3) ||
                (numero2 == numero3 && numero2 == numero4) ||
                (numero3 == numero4 && numero3 == numero5)) {
                console.log("GANASTE TRIPLE NUMERO");
                casino.setSaldo(casino.saldo + this.apuesta * this.multiplicador);
                console.log(casino.saldo);
            }
            else {
                console.log("QUE MALA SUERTE, INTENTA DE NUEVO");
                casino.setSaldo(casino.saldo - this.apuesta);
                console.log(casino.saldo);
            }
        }
        else {
            console.log("Saldo insuficiente");
        }
    }
}
exports.Tragamoneda2 = Tragamoneda2;
