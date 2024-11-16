class Casino {
  private balance: number;

  constructor() {
    this.balance = 1000; // Saldo inicial
  }

  // Mostrar menú con opciones simples
  mostrarMenu(): void {
    console.log("\nBienvenido al Casino!");
    console.log("1. Ver balance");
    console.log("2. Salir");
    this.pedirOpcion();
  }

  // Pedir opción del usuario
  pedirOpcion(): void {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Elige una opción: ", (opcion: string) => {
      if (opcion === "1") {
        this.verBalance();
      } else if (opcion === "2") {
        console.log("¡Gracias por visitar el casino! Hasta pronto.");
        rl.close();
        return;
      } else {
        console.log("Opción no válida.");
      }
      this.mostrarMenu(); // Vuelve a mostrar el menú después de una acción
    });
  }

  // Ver balance del jugador
  verBalance(): void {
    console.log(`Tu saldo es: $${this.balance}`);
  }
}

// Crear instancia de casino y mostrar menú
const casino = new Casino();
casino.mostrarMenu();
