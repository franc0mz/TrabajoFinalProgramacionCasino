import * as readlineSync from 'readline-sync';

class Casino {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public mostrarSaldo(): void {
    console.log(`Tu saldo actual es: $${this.saldo}`);
  }

  public jugarTragamonedas(): void {
    const apuesta = this.solicitarApuesta();
    if (apuesta > this.saldo) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    console.log("Girando tragamonedas...");
    const resultado = Math.floor(Math.random() * 3) + 1; // Simulación simple
    const premio = resultado === 3 ? apuesta * 10 : 0;

    this.saldo += premio - apuesta;
    console.log(premio > 0 ? `¡Ganaste $${premio}!` : "No ganaste esta vez.");
  }

  public jugarCraps(): void {
    const apuesta = this.solicitarApuesta();
    if (apuesta > this.saldo) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const suma = dado1 + dado2;

    console.log(`Tiraste un ${dado1} y un ${dado2} (Total: ${suma})`);

    if (suma === 7 || suma === 11) {
      console.log("¡Ganaste!");
      this.saldo += apuesta;
    } else if (suma === 2 || suma === 3 || suma === 12) {
      console.log("Perdiste.");
      this.saldo -= apuesta;
    } else {
      console.log("No pasa nada, el saldo permanece igual.");
    }
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

  public jugarRuleta(): void {
    const apuesta = this.solicitarApuesta();
    if (apuesta > this.saldo) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    const eleccion = readlineSync.question("Elige un numero entre 0 y 36: ");
    const numeroGanador = Math.floor(Math.random() * 37);

    console.log(`El numero ganador es: ${numeroGanador}`);

    if (parseInt(eleccion) === numeroGanador) {
      const premio = apuesta * 36;
      console.log(`¡Ganaste $${premio}!`);
      this.saldo += premio;
    } else {
      console.log("No acertaste, perdiste la apuesta.");
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
  const casino = new Casino(100);

  while (true) {
    console.log("==========================")
    console.log("Bienvenidos al Gran Casino");
    console.log("==========================")
    console.log("1. Ver saldo");
    console.log("2. Jugar a tragamonedas");
    console.log("3. Jugar a craps");
    console.log("4. Jugar a blackjack");
    console.log("5. Jugar a la ruleta");
    console.log("6. Salir");

    const opcion = readlineSync.question("Elige una opcion: ");

    switch (opcion) {
      case "1":
        casino.mostrarSaldo();
        break;
      case "2":
        casino.jugarTragamonedas();
        break;
      case "3":
        casino.jugarCraps();
        break;
      case "4":
        casino.jugarBlackjack();
        break;
      case "5":
        casino.jugarRuleta();
        break;
      case "6":
        casino.salir();
        break;
      default:
        console.log("Opcion no valida.");
    }
  }
}

main();
