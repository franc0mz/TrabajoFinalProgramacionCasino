import * as readlineSync from 'readline-sync';

class BlackJack {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public mostrarSaldo(): void {
    console.log(`Tu saldo actual es: $${this.saldo}`);
  }

public jugarBlackjack(): void {
    const apuesta = this.solicitarApuesta();
    if (apuesta > this.saldo) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    const jugador = Math.floor(Math.random() * 21) + 1;
    const casa = Math.floor(Math.random() * 21) + 1;

    console.log(`Tu puntuacion: ${jugador}, Puntuacion de la casa: ${casa}`);

    if (jugador > 21) {
      console.log("Te pasaste, perdiste.");
      this.saldo -= apuesta;
    } else if (casa > 21 || jugador > casa) {
      console.log("¡Ganaste!");
      this.saldo += apuesta;
    } else {
      console.log("Perdiste.");
      this.saldo -= apuesta;
    }
  }

  private solicitarApuesta(): number {
    return parseFloat(readlineSync.question("Ingresa tu apuesta: $"));
  }

  public salir(): void {
    console.log(`Gracias por jugar. Te retiras con $${this.saldo}.`);
    process.exit();
  }
}

function main() {
  const bj = new BlackJack(100);

  while (true) {
    console.log("♤ ♡ ♧ ♢ [BlackJack] ♤ ♡ ♧ ♢");
    console.log("1. Ver saldo");
    console.log("2. Jugar");
    console.log("3. Salir");

    const opcion = readlineSync.question("Elige una opcion: ");

    switch (opcion) {
      case "1":
        bj.mostrarSaldo();
        break;
      case "2":
        bj.jugarBlackjack();
        break;
      case "3":
        bj.salir();
        break;
    }
  }
}

main();
