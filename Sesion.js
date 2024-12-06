"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sesion = void 0;
class Sesion {
    constructor(saldo = 1000) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    setNuevoSaldo(nuevoSaldo) {
        this.saldo = nuevoSaldo;
    }
    mostrarSaldo() {
        console.log(this.saldo);
    }
}
exports.Sesion = Sesion;
let sesion1 = new Sesion(10000);
sesion1.mostrarSaldo(); // ACA MOSTRAMOS EL SALDO USANDO EL METODO QUE SE CREO
//console.log (sesion1.saldo)
