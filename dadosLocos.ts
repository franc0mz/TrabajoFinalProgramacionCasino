class CrapsGame {
  private balance: number;

  constructor() {
    this.balance = 1000; // Saldo inicial
  }

  // Mostrar menú
  mostrarMenu(): void {
    console.log("\nBienvenido al juego de Craps!");
    console.log("1. Jugar una partida");
    console.log("2. Ver saldo");
    console.log("3. Salir");
    this.pedirOpcion();
  }

  // Pedir opción
  pedirOpcion(): void {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Elige una opción: ", (opcion: string) => {
      if (opcion === "1") {
        this.jugarPartida();
      } else if (opcion === "2") {
        this.verSaldo();
      } else if (opcion === "3") {
        console.log("¡Hasta pronto!");
        rl.close();
      } else {
        console.log("Opción no válida.");
      }
      this.mostrarMenu(); // Mostrar menú nuevamente
    });
  }

  // Ver saldo
  verSaldo(): void {
    console.log(`Tu saldo es: $${this.balance}`);
  }

  // Jugar una partida
  jugarPartida(): void {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("¿Cuánto deseas apostar? ", (monto: string) => {
      const apuesta = parseInt(monto);
      if (isNaN(apuesta) || apuesta <= 0 || apuesta > this.balance) {
        console.log("Apuesta no válida.");
        rl.close();
        return;
      }

      this.balance -= apuesta; // Restar apuesta
      this.lanzarDados(); // Lanzar dados

      rl.close();
    });
  }

  // Lanzar los dados
  lanzarDados(): void {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const total = dado1 + dado2;

    console.log(`Lanzaste los dados: ${dado1} y ${dado2} (Total: ${total})`);

    this.controlarTiroSalida(total);
  }

  // Controlar resultado del tiro de salida
  controlarTiroSalida(total: number): void {
    if (total === 7 || total === 11) {
      console.log("¡Ganaste! Tiro ganador.");
      this.balance += 2 * this.balance; // Doble la apuesta
    } else if (total === 2 || total === 3 || total === 12) {
      console.log("¡Perdiste! Tiro de 'craps'.");
    } else {
      console.log(`Tu punto es: ${total}.`);
      console.log("Este juego es solo para tiro inicial. Fin de la partida.");
    }
  }
}

// Crear y jugar
const craps = new CrapsGame();
craps.mostrarMenu();
