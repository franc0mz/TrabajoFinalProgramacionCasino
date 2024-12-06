"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
class Casino {
    constructor(nombre, juego) {
        this.nombre = nombre;
        this.saldo = 10000;
        this.juego = juego;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    setJuego(juego) {
        this.juego = juego;
    }
}
exports.Casino = Casino;
