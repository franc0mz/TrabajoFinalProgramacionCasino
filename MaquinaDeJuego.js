"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquinaDeJuego = void 0;
class MaquinaDeJuego {
    constructor(nombre) {
        this.apuesta = 0;
        this.nombre = nombre;
        //this.apuesta=0 INICIALICE "APUESTA" DIRECTAMENTE DECLARANDOLA ASI ESTA LINEA DEL CONSTRUCTOR LA PODEMOS SIMPLIFICAR PERO ESTA BIEN IGUAL ES LO MISMO.
    }
    numeroRandom(numLimite) {
        let numeroRandom = Math.random() * numLimite;
        return Math.round(numeroRandom);
    }
}
exports.MaquinaDeJuego = MaquinaDeJuego;
