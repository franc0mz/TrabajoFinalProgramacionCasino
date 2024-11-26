import * as readlineSync from 'readline-sync';

class BlackJack {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  public mostrarSaldo(): void {
    console.log(`\n💰 Tu saldo actual es: $${this.saldo}\n`);
  }

  public jugarBlackjack(): void {
    const apuesta = this.solicitarApuesta();
    if (apuesta > this.saldo) {
      console.log("❌ No tienes suficiente saldo. Intenta de nuevo.");
      return;
    }

    const jugador = this.generarPuntuacion();
    const casa = this.generarPuntuacion();

    console.log(`\nTu puntuación: ${jugador}, 🏠 Puntuación de la casa: ${casa}`);

    if (jugador > 21) {
      console.log("❌ Te pasaste de 21. Pierdes la apuesta.");
      this.saldo -= apuesta;
    } else if (casa > 21 || jugador > casa) {
      console.log("🎉 ¡Ganaste! Tu apuesta se duplica.");
      this.saldo += apuesta;
    } else if (jugador === casa) {
      console.log("🤝 Empate. Recuperas tu apuesta.");
    } else {
      console.log("❌ La casa gana. Pierdes la apuesta.");
      this.saldo -= apuesta;
    }
  }

  private solicitarApuesta(): number {
    while (true) {
      const apuesta = parseFloat(readlineSync.question("Ingresa tu apuesta: $"));
      if (!isNaN(apuesta) && apuesta > 0 && apuesta <= this.saldo) {
        return apuesta;
      }
      console.log("❌ Apuesta invalida. Debe ser un numero positivo y no mayor a tu saldo.");
    }
  }

  private generarPuntuacion(): number {
    return Math.floor(Math.random() * 11) + 10; // Generar puntuación entre 10 y 20.
  }

  public salir(): void {
    console.log(`\n👋 Gracias por jugar. Te retiras con $${this.saldo}.\n`);
    process.exit();
  }
}

function mostrarInstrucciones(): void {
  console.log(`
♤ ♡ ♧ ♢ [BlackJack] ♤ ♡ ♧ ♢
Reglas:
1. Obtén una puntuacion mayor que la de la casa sin superar los 21.
2. Si te pasas de 21, pierdes automáticamente.
3. Puedes apostar cualquier cantidad dentro de tu saldo.

¡Buena suerte!`);
}

function main() {
  const bj = new BlackJack(100);
  mostrarInstrucciones();

  while (true) {
    console.log("♤ ♡ ♧ ♢ [Menu] ♤ ♡ ♧ ♢");
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
      default:
        console.log("❌ Opcion invalida. Intenta de nuevo.");
    }
  }
}

main();

