import * as rls from "readline-sync";
import { Tragamoneda } from "./Tragamoneda";
import { Usuario } from "./Usuario";
import fs from "node:fs";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Dado } from "./Dados";
import { Tragamoneda2 } from "./Tragamonedas2";
import { BlackJack } from "./BlackJack";
import { Instrucciones } from "./interfazInstrucciones";

export class Menu implements Instrucciones {
  public nombre: string;
  public usuario: Usuario;
  public tragamoneda: Tragamoneda;
  public tragamoneda2: Tragamoneda;
  public dado: Dado;
  public blackJack: BlackJack;
  public instruccionesTragamonedas: string;
  public instruccionesBlackjack: string;
  public instruccionesDados: string;
  constructor(
    nombre: string,
    usuario: Usuario,
    tragamoneda: Tragamoneda,
    tragamoneda2: Tragamoneda2,
    dado: Dado,
    blackJack: BlackJack
  ) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.tragamoneda = tragamoneda;
    this.tragamoneda2 = tragamoneda2;
    this.dado = dado;
    this.blackJack = blackJack;
    this.instruccionesTragamonedas = fs.readFileSync(
      "./instruccionesTragamonedas.txt",
      "utf8"
    );
    this.instruccionesBlackjack = fs.readFileSync(
      "./instruccionesBlackjack.txt",
      "utf-8"
    );
    this.instruccionesDados = fs.readFileSync(
      "./instruccionesDados.txt",
      "utf8"
    );
  }

  mostrarInstrucciones(instrucciones: string) {
    let instrTragamoneda: string = instrucciones.trim();
    let mostrInstrTragamoneda: string[] = instrTragamoneda.split(" ");
    return console.log(mostrInstrTragamoneda.join(" "));
  }

  menuPrincipal(
    usuario: Usuario,
    tragamoneda: Tragamoneda,
    tragamoneda2: Tragamoneda2,
    dado: Dado,
    blackJack: BlackJack
  ) {
    console.clear();
    if (this.usuario.getNombre() === "") {
      this.usuario.setNombre();
      do {
        this.usuario.agregarSaldo()
      } while (this.usuario.getSaldo()<100);
    }
    console.clear();
    console.log(
      `Bienvenido al Casino ${this.usuario.getNombre()}\n` +
        "----------------------------------------\n" +
        "1 - Juegos\n" +
        "2 - Saldo\n" +
        "0 - Salir\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Juegos");
        this.menuJuegos(usuario, tragamoneda, tragamoneda2, dado, blackJack);
        break;
      case 2:
        console.log("Opción 2: Saldo");
        this.menuSaldo(usuario, tragamoneda);
        break;
      case 0:
        console.log(`Te retiras con : $ ${usuario.getSaldo()}`)
        console.log(`Gracias por jugar con nosotros ${usuario.getNombre()}.\n¡Vuelva Pronto!`);
        setTimeout(() => {}, 2000);
        break;
      default:
        console.log("Opcion no válida. Por favor, elige entre 0 y 2.");
        setTimeout(() => {
          this.menuPrincipal(
            usuario,
            tragamoneda,
            tragamoneda2,
            dado,
            blackJack
          );
        }, 2000);
        break;
    }
  }

  menuJuegos(
    usuario: Usuario,
    tragamoneda: Tragamoneda,
    tragamoneda2: Tragamoneda2,
    dado: Dado,
    blackJack: BlackJack
  ) {
    console.clear();
    console.log(
      "----------------JUEGOS-----------------\n" +
        "1 - Tragamonedas\n" +
        "2 - Blackjack\n" +
        "3 - Dados\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero del juego deseado: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Tragamonedas");
        this.menuTragamonedas(usuario, tragamoneda);
        break;
      case 2:
        console.log("Opción 2: BlackJack");
        this.menuBlackJack(usuario, blackJack);
        break;
      case 3:
        console.log("Opción 3: Dados");
        this.menuDados(usuario, dado);
        break;
      case 0:
        console.log("Opción 0: Volver al menu principal");
        this.menuPrincipal(usuario, tragamoneda, tragamoneda2, dado, blackJack);
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 0 y 3.");
        setTimeout(() => {
          this.menuJuegos(usuario, tragamoneda, tragamoneda2, dado, blackJack);
        }, 2000);
        break;
    }
  }

  menuSaldo(usuario: Usuario, tragamoneda: Tragamoneda) {
    console.clear();
    console.log(
      "--------------SALDO--------------------\n" +
        "1 - Saldo Actual\n" +
        "2 - Agregar saldo\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero del juego deseado: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log(`Opción 1: Saldo Actual : ${usuario.getSaldo()}`);
        setTimeout(() => {
          this.menuSaldo(usuario, tragamoneda);
        }, 2000);
        break;
      case 2:
        console.log(`Opción 2: Agregar Saldo`);
        console.log(`Saldo Actual : ${usuario.getSaldo()}`)
        usuario.agregarSaldo()
        console.log(`Nuevo Saldo : ${usuario.getSaldo()}`)

        setTimeout(() => {
          this.menuSaldo(usuario, tragamoneda);
        }, 2000);
        break;
      case 0:
        console.log("Opción 0: Menu Principal");
        this.menuPrincipal(
          usuario,
          tragamoneda,
          this.tragamoneda2,
          this.dado,
          this.blackJack
        );
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 0 y 1");
        setTimeout(() => {
          this.menuSaldo(usuario, tragamoneda);
        }, 2000);
        break;
    }
  }

  menuTragamonedas(usuario: Usuario, MaquinaDeJuego: MaquinaDeJuego) {
    console.clear();
    console.log(
      "---------------TRAGAMONEDAS-------------\n" +
        "1 - Instrucciones\n" +
        "2 - Jugar Tragamonedas x3 Lineas\n" +
        "3 - Jugar Tragamonedas x5 Lineas\n" +
        "4 - Modificar Apuesta\n" +
        "5 - Saldo Actual\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Instrucciones");
        //Instrucciones()
        this.mostrarInstrucciones(this.instruccionesTragamonedas);
        setTimeout(() => {
          this.menuTragamonedas(usuario, MaquinaDeJuego);
        }, 7000);
        break;
      case 2:
        console.log("Opción 2: Jugar Tragamonedas x3 Lineas");
        let elegir: number = 1;
        while (elegir === 1) {
          this.tragamoneda.juego(usuario);
          elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ");
          console.clear();
        }

        this.menuTragamonedas(usuario, MaquinaDeJuego);

        break;
      case 3:
        console.log("Opción 2: Jugar Tragamonedas x5 Lineas");
        let elegir2 = 1;
        while (elegir2 === 1) {
          this.tragamoneda2.juego(usuario);
          elegir2 = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ");
          console.clear();
        }

        this.menuTragamonedas(usuario, MaquinaDeJuego);

        break;
      case 4:
        console.log("Opción 3: Modificar apuesta");
        this.menuModificarApuesta(usuario, this.tragamoneda);
        //  setTimeout(() => {
        //        this.menuTragamonedas(usuario, tragamoneda)
        //    }, 2000)
        break;
      case 5:
        //saldoActual()
        console.log(`Opción 4: Saldo Actual : ${usuario.getSaldo()}`);
        setTimeout(() => {
          this.menuTragamonedas(usuario, this.tragamoneda);
        }, 2000);
        break;
      case 0:
        console.log("Opción 0: Volver al menu principal");
        this.menuPrincipal(
          usuario,
          this.tragamoneda,
          this.tragamoneda2,
          this.dado,
          this.blackJack
        );
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 1 y 4.");
        setTimeout(() => {
          this.menuTragamonedas(usuario, this.tragamoneda);
        }, 2000);
        break;
    }
  }
  //poner menu de modificar apuestas dentro de jugar

  menuModificarApuesta(usuario: Usuario, tragamoneda: Tragamoneda) {
    console.clear();
    console.log(
      "-----------MODIFICAR APUESTA------------\n" +
        "1 - Valor de la apuesta 5\n" +
        "2 - Valor de la apuesta 10\n" +
        "3 - Valor de la apuesta 12\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Valor de la apuesta 5");
        tragamoneda.setApuesta(5);
        this.tragamoneda2.setApuesta(5);

        setTimeout(() => {
          this.menuTragamonedas(usuario, tragamoneda);
        }, 2000);
        break;

      case 2:
        console.log("Opción 2: Valor de la apuesta ahora es 10");
        tragamoneda.setApuesta(10);
        tragamoneda.setMuliplicador(3);
        this.tragamoneda2.setApuesta(10);
        this.tragamoneda2.setMuliplicador(3);
        setTimeout(() => {
          this.menuTragamonedas(usuario, tragamoneda);
        }, 2000);
        break;

      case 3:
        console.log("Opción 3: Valor de la apuesta 12");
        tragamoneda.setApuesta(12);
        tragamoneda.setMuliplicador(4);
        this.tragamoneda2.setApuesta(12);
        this.tragamoneda2.setMuliplicador(4);
        setTimeout(() => {
          this.menuTragamonedas(usuario, tragamoneda);
        }, 2000);
        break;

      case 0:
        console.log("Opción 0: Volver al menu principal");
        this.menuPrincipal(
          usuario,
          tragamoneda,
          this.tragamoneda2,
          this.dado,
          this.blackJack
        );
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 0 y 3.");
        setTimeout(() => {
          this.menuTragamonedas(usuario, tragamoneda);
        }, 2000);
        break;
    }
  }

  menuDados(usuario: Usuario, MaquinaDeJuego: MaquinaDeJuego) {
    console.clear();
    console.log(
      "-----------------DADOS------------------\n" +
        "1 - Instrucciones\n" +
        "2 - Jugar\n" +
        "3 - Saldo Actual\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Instrucciones");
        //Instrucciones()
        this.mostrarInstrucciones(this.instruccionesDados);
        setTimeout(() => {
          this.menuDados(usuario, MaquinaDeJuego);
        }, 7000);
        break;
      case 2:
        console.log("Opción 2: Jugar");
        let elegir: number = 1;
        while (elegir === 1) {
          this.dado.juego(usuario);
          elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ");
          console.clear();
        }

        this.menuDados(usuario, MaquinaDeJuego);

        break;
      case 3:
        //saldoActual()
        console.log(`Opción 4: Saldo Actual : ${usuario.getSaldo()}`);
        setTimeout(() => {
          this.menuDados(usuario, this.tragamoneda);
        }, 2000);
        break;
      case 0:
        console.log("Opción 0: Volver al menu principal");
        this.menuPrincipal(
          usuario,
          this.tragamoneda,
          this.tragamoneda2,
          this.dado,
          this.blackJack
        );
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 1 y 3.");
        setTimeout(() => {
          this.menuDados(usuario, this.tragamoneda);
        }, 2000);
        break;
    }
  }

  menuBlackJack(usuario: Usuario, MaquinaDeJuego: MaquinaDeJuego) {
    console.clear();
    console.log(
      "-----------------BlackJack------------------\n" +
        "1 - Instrucciones\n" +
        "2 - Jugar\n" +
        "3 - Saldo Actual\n" +
        "0 - Volver al menu principal\n" +
        "----------------------------------------"
    );
    let elegir: number = rls.questionInt(
      "Escriba el numero de la opcion deseada: "
    );
    console.clear();
    switch (elegir) {
      case 1:
        console.log("Opción 1: Instrucciones");
        //Instrucciones()
        this.mostrarInstrucciones(this.instruccionesBlackjack);
        setTimeout(() => {
          this.menuBlackJack(usuario, MaquinaDeJuego);
        }, 7000);
        break;
      case 2:
        console.log("Opción 2: Jugar");
        let elegir: number = 1;
        while (elegir === 1) {
          this.blackJack.juego(usuario);
          elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ");
          console.clear();
        }

        this.menuBlackJack(usuario, MaquinaDeJuego);

        break;
      case 3:
        //saldoActual()
        console.log(`Opción 4: Saldo Actual : ${usuario.getSaldo()}`);
        setTimeout(() => {
          this.menuBlackJack(usuario, this.tragamoneda);
        }, 2000);
        break;
      case 0:
        console.log("Opción 0: Volver al menu principal");
        this.menuPrincipal(
          usuario,
          this.tragamoneda,
          this.tragamoneda2,
          this.dado,
          this.blackJack
        );
        break;
      default:
        console.log("Opción no válida. Por favor, elige entre 1 y 3.");
        setTimeout(() => {
          this.menuBlackJack(usuario, this.tragamoneda);
        }, 2000);
        break;
    }
  }
}
