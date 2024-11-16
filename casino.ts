// Definimos las opciones de juego y un menú interactivo.
class Casino {
  private balance: number;

  constructor() {
    this.balance = 1000; // Saldo inicial del jugador
  }

  // Mostrar el menú principal
  mostrarMenu(): void {
    console.log("=======================================");
    console.log("        Bienvenido al Casino!         ");
    console.log("=======================================");
    console.log("1. Ver balance");
    console.log("2. Jugar a la ruleta");
    console.log("3. Jugar a las tragamonedas");
    console.log("4. Salir");
    console.log("=======================================");
    this.pedirOpcion();
  }

  // Pedir la opción al usuario
  pedirOpcion(): void {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Elige una opción: ", (opcion: string) => {
      switch (opcion) {
        case "1":
          this.verBalance();
          break;
        case "2":
          this.jugarRuleta();
          break;
        case "3":
          this.jugarTragamonedas();
          break;
        case "4":
          console.log("Gracias por jugar. ¡Hasta pronto!");
          rl.close();
          return;
        default:
          console.log("Opción no válida. Por favor elige una opción correcta.");
          break;
      }
      this.mostrarMenu(); // Mostrar nuevamente el menú después de una acción
    });
  }

  // Ver balance del jugador
  verBalance(): void {
    console.log(`Tu saldo actual es: $${this.balance}`);
  }

  // Jugar a la ruleta
  jugarRuleta(): void {
    console.log("Juguemos a la ruleta!");
    const costo = 50;
    if (this.balance >= costo) {
      this.balance -= costo; // Restar el costo de la apuesta
      const numeroAleatorio = Math.floor(Math.random() * 37); // Números de la ruleta (0 a 36)
      console.log(`Apostaste a la ruleta. El número sorteado es: ${numeroAleatorio}`);
      if (numeroAleatorio === 0) {
        console.log("¡Ganaste el bote grande! Tu saldo se multiplica por 10.");
        this.balance += costo * 10; // Ganar multiplicado por 10 si es el número 0
      } else {
        console.log("Perdiste esta ronda.");
      }
    } else {
      console.log("No tienes suficiente saldo para jugar a la ruleta.");
    }
  }

  // Jugar a las tragamonedas
  jugarTragamonedas(): void {
    console.log("Juguemos a las tragamonedas!");
    const costo = 100;
    if (this.balance >= costo) {
      this.balance -= costo; // Restar el costo de la apuesta
      const resultado = this.generarResultadoTragamonedas();
      console.log(`El resultado de las tragamonedas es: ${resultado}`);
      if (resultado === "🍒🍒🍒") {
        console.log("¡Ganaste! Has obtenido 500 en premio.");
        this.balance += 500; // Premio por ganar en las tragamonedas
      } else {
        console.log("Lo siento, no ganaste esta vez.");
      }
    } else {
      console.log("No tienes suficiente saldo para jugar a las tragamonedas.");
    }
  }

  // Generar un resultado aleatorio para las tragamonedas
  generarResultadoTragamonedas(): string {
    const simbolos = ["🍒", "🍉", "🍇", "🍊", "🍎"];
    let resultado = "";
    for (let i = 0; i < 3; i++) {
      resultado += simbolos[Math.floor(Math.random() * simbolos.length)];
    }
    return resultado;
  }
}

// Inicializamos el casino y mostramos el menú
const casino = new Casino();
casino.mostrarMenu();
