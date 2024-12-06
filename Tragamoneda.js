"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamoneda = void 0;
const MaquinaDeJuego_1 = require("./MaquinaDeJuego");
class Tragamoneda extends MaquinaDeJuego_1.MaquinaDeJuego {
    constructor(nombre) {
        super(nombre);
        this.apuesta = 5; //apuesta predeterminada
        this.multiplicador = 2; //multiplicador predeterminado
    }
    setApuesta(apuesta) {
        this.apuesta = apuesta;
    }
    setMuliplicador(multiplicador) {
        this.multiplicador = multiplicador;
    }
    numeroRandom() {
        let numeroRandom = Math.random() * 3;
        return Math.round(numeroRandom);
    }
    juego(casino) {
        if (casino.getSaldo() - this.apuesta >= 0) { //modifique esto
            let numero1 = this.numeroRandom();
            let numero2 = this.numeroRandom();
            let numero3 = this.numeroRandom();
            //numero1 = this.numeroRandom();
            //numero2 = this.numeroRandom()
            //numero3 = this.numeroRandom()
            console.log(numero1, numero2, numero3);
            if (numero1 == numero2 && numero2 == numero3) {
                console.log("GANASTE");
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
exports.Tragamoneda = Tragamoneda;
