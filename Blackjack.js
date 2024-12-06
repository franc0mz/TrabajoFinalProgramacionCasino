"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blackjack = void 0;
const MaquinaDeJuego_1 = require("./MaquinaDeJuego");
class Blackjack extends MaquinaDeJuego_1.MaquinaDeJuego {
    constructor(nombre) {
        super(nombre);
        this.apuesta = 5; // Apuesta predeterminada
    }
    setApuesta(apuesta) {
        this.apuesta = apuesta;
    }
    generarCarta() {
        // Genera un número aleatorio entre 1 y 11 para simular una carta
        return Math.floor(Math.random() * 11) + 1;
    }
    juego(casino) {
        console.log(`Jugando al: ${this.nombre}`);
        console.log(`Apuesta actual: ${this.apuesta}`);
        // Verifica si el jugador tiene saldo suficiente
        if (casino.getSaldo() < this.apuesta) {
            console.log("Saldo insuficiente para jugar.");
            return;
        }
        // Restar la apuesta al saldo inicial
        casino.setSaldo(casino.getSaldo() - this.apuesta);
        // Jugador y la casa reciben cartas
        const jugador = this.generarCarta() + this.generarCarta();
        const casa = this.generarCarta() + this.generarCarta();
        console.log(`Tu total: ${jugador}`);
        console.log(`Total de la casa: ${casa}`);
        // Determinar ganador
        if (jugador > 21) {
            console.log("Te pasaste de 21. ¡Perdiste!");
        }
        else if (casa > 21 || jugador > casa) {
            console.log("¡Ganaste!");
            casino.setSaldo(casino.getSaldo() + this.apuesta * 2);
        }
        else if (jugador === casa) {
            console.log("Empate. Recuperas tu apuesta.");
            casino.setSaldo(casino.getSaldo() + this.apuesta);
        }
        else {
            console.log("La casa gana. ¡Mejor suerte la próxima vez!");
        }
        console.log(`Saldo actual: ${casino.getSaldo()}`);
    }
}
exports.Blackjack = Blackjack;
