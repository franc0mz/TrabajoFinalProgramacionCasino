"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const rls = require("readline-sync");
const fs = require("node:fs"); //le agregue * as
class Menu {
    constructor(nombre, casino, tragamoneda, tragamoneda2, blackjack, dado) {
        this.nombre = nombre;
        this.casino = casino;
        this.tragamoneda = tragamoneda;
        this.tragamoneda2 = tragamoneda2;
        this.blackjack = blackjack;
        this.dado = dado;
        this.instruccionesTragamonedas = fs.readFileSync("./instruccionesTragamonedas.txt", "utf8");
        this.instruccionesBlackjack = fs.readFileSync("./instruccionesBlackjack.txt", "utf-8");
        this.instruccionesDados = fs.readFileSync("./instruccionesDados.txt", "utf8");
    }
    mostrarInstrucciones(instrucciones) {
        let instrTragamoneda = instrucciones.trim();
        let mostrInstrTragamoneda = instrTragamoneda.split(" ");
        return console.log(mostrInstrTragamoneda.join(" "));
    }
    menuPrincipal(casino, tragamoneda, tragamoneda2, blackjack, dado) {
        console.clear();
        console.log("Bienvenido al Casino\n" +
            "----------------------------------------\n" +
            "1 - Juegos\n" +
            "2 - Saldo\n" +
            "0 - Salir\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero de la opcion deseada: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Juegos");
                this.menuJuegos(casino, tragamoneda, tragamoneda2, blackjack, dado);
                break;
            case 2:
                console.log("Opción 2: Saldo");
                this.menuSaldo(casino, tragamoneda);
                break;
            case 0:
                console.log(`Gracias por jugar, Usted se retira con: $${casino.getSaldo()}`);
                setTimeout(() => { }, 2000);
                break;
            default:
                console.log("Opcion no válida. Por favor, elige entre 0 y 2.");
                setTimeout(() => {
                    this.menuPrincipal(casino, tragamoneda, tragamoneda2, blackjack, dado);
                }, 2000);
                break;
        }
    }
    menuJuegos(casino, tragamoneda, tragamoneda2, blackjack, dado) {
        console.clear();
        console.log("----------------JUEGOS-----------------\n" +
            "1 - Tragamonedas\n" +
            "2 - Blackjack\n" +
            "3 - Dados\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero del juego deseado: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Tragamonedas");
                this.menuTragamonedas(casino, tragamoneda);
                break;
            case 2:
                console.log("Opción 2: BlackJack");
                this.menuBlackjack(casino, blackjack);
                break;
            case 3:
                console.log("Opción 3: Dados");
                this.menuDados(casino, dado);
                break;
            case 4:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda, tragamoneda2, blackjack, dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 3.");
                setTimeout(() => {
                    this.menuJuegos(casino, tragamoneda, tragamoneda2, blackjack, dado);
                }, 2000);
                break;
        }
    }
    menuSaldo(casino, tragamoneda) {
        console.clear();
        console.log("--------------SALDO--------------------\n" +
            "1 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero del juego deseado: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log(`Opción 1: Saldo Actual : ${casino.getSaldo()}`);
                setTimeout(() => {
                    this.menuSaldo(casino, tragamoneda);
                }, 2000);
                break;
            case 0:
                console.log("Opción 0: Menu Principal");
                this.menuPrincipal(casino, tragamoneda, this.tragamoneda2, this.blackjack, this.dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 1");
                setTimeout(() => {
                    this.menuSaldo(casino, tragamoneda);
                }, 2000);
                break;
        }
    }
    menuTragamonedas(casino, MaquinaDeJuego) {
        console.clear();
        console.log("---------------TRAGAMONEDAS-------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar Tragamonedas x3 Lineas\n" +
            "3 - Jugar Tragamonedas x5 Lineas\n" +
            "4 - Modificar Apuesta\n" +
            "5 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero de la opcion deseada: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                //Instrucciones()
                this.mostrarInstrucciones(this.instruccionesTragamonedas);
                setTimeout(() => {
                    this.menuTragamonedas(casino, MaquinaDeJuego);
                }, 7000);
                break;
            case 2:
                console.log("Opción 2: Jugar Tragamonedas x3 Lineas");
                let elegir = 1;
                while (elegir === 1) {
                    this.tragamoneda.juego(casino);
                    elegir = rls.questionInt("1) Seguir jugando, 2) Volver al menu: ");
                    console.clear();
                }
                this.menuTragamonedas(casino, MaquinaDeJuego);
                break;
            case 3:
                console.log("Opción 3: Jugar Tragamonedas x5 Lineas");
                let elegir2 = 1;
                while (elegir2 === 1) {
                    this.tragamoneda2.juego(casino);
                    elegir2 = rls.questionInt("1) Seguir jugando, 2) Volver al menu: ");
                    console.clear();
                }
                this.menuTragamonedas(casino, MaquinaDeJuego);
                break;
            case 4:
                console.log("Opción 4: Modificar apuesta");
                this.menuModificarApuesta(casino, MaquinaDeJuego, this.tragamoneda);
                //  setTimeout(() => {
                //        this.menuTragamonedas(casino, tragamoneda)
                //    }, 2000)
                break;
            case 5:
                //saldoActual()
                console.log(`Opción 5: Saldo Actual : ${casino.getSaldo()}`);
                setTimeout(() => {
                    this.menuTragamonedas(casino, this.tragamoneda);
                }, 2000);
                break;
            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, this.tragamoneda, this.tragamoneda2, this.blackjack, this.dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {
                    this.menuTragamonedas(casino, this.tragamoneda);
                }, 2000);
                break;
        }
    }
    //poner menu de modificar apuestas dentro de jugar
    menuModificarApuesta(casino, MaquinaDeJuego, tragamoneda) {
        console.clear();
        console.log("-----------MODIFICAR APUESTA------------\n" +
            "1 - Valor de la apuesta 5\n" +
            "2 - Valor de la apuesta 10\n" +
            "3 - Valor de la apuesta 12\n" +
            "0 - Volver al menu\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero de la opcion deseada: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Valor de la apuesta 5");
                tragamoneda.setApuesta(5);
                this.tragamoneda2.setApuesta(5);
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda);
                }, 2000);
                break;
            case 2:
                console.log("Opción 2: Valor de la apuesta ahora es 10");
                tragamoneda.setApuesta(10);
                tragamoneda.setMuliplicador(3);
                this.tragamoneda2.setApuesta(10);
                this.tragamoneda2.setMuliplicador(3);
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda);
                }, 2000);
                break;
            case 3:
                console.log("Opción 3: Valor de la apuesta 12");
                tragamoneda.setApuesta(12);
                tragamoneda.setMuliplicador(4);
                this.tragamoneda2.setApuesta(12);
                this.tragamoneda2.setMuliplicador(4);
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda);
                }, 2000);
                break;
            case 0:
                console.log("Opción 0: Volver al menu");
                this.menuTragamonedas(casino, tragamoneda); //this.tragamoneda2, this.blackjack, this.dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 3.");
                setTimeout(() => {
                    this.menuModificarApuesta(casino, MaquinaDeJuego, tragamoneda);
                }, 2000);
                break;
        }
    }
    menuBlackjack(casino, MaquinaDeJuego) {
        console.clear();
        console.log("---------------Blackjack-------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar a las cartas\n" +
            "3 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero de la opcion deseada: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                //Instrucciones()
                this.mostrarInstrucciones(this.instruccionesBlackjack);
                setTimeout(() => {
                    this.menuBlackjack(casino, MaquinaDeJuego);
                }, 7000);
                break;
            case 2:
                console.log("Opción 2: Jugar a las cartas");
                let elegir = 1;
                while (elegir === 1) {
                    this.blackjack.juego(casino);
                    elegir = rls.questionInt("1) Seguir jugando, 2) Volver al menu: ");
                    console.clear();
                }
                this.menuBlackjack(casino, MaquinaDeJuego);
                break;
            case 3:
                console.log(`Opción 3: Saldo Actual : ${casino.getSaldo()}`);
                setTimeout(() => {
                    this.menuBlackjack(casino, this.tragamoneda);
                }, 2000);
                break;
            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, this.tragamoneda, this.tragamoneda2, this.blackjack, this.dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 3.");
                setTimeout(() => {
                    this.menuBlackjack(casino, this.tragamoneda);
                }, 2000);
                break;
        }
    }
    menuDados(casino, MaquinaDeJuego) {
        console.clear();
        console.log("-----------------DADOS------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar\n" +
            "3 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------");
        let elegir = rls.questionInt("Escriba el numero de la opcion deseada: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                //Instrucciones()
                this.mostrarInstrucciones(this.instruccionesDados);
                setTimeout(() => {
                    this.menuDados(casino, MaquinaDeJuego);
                }, 7000);
                break;
            case 2:
                console.log("Opción 2: Jugar");
                let elegir = 1;
                while (elegir === 1) {
                    this.dado.juego(casino);
                    elegir = rls.questionInt("1) Seguir jugando, 2) Volver al menu: ");
                    console.clear();
                }
                this.menuDados(casino, MaquinaDeJuego);
                break;
            case 3:
                //saldoActual()
                console.log(`Opción 4: Saldo Actual : ${casino.getSaldo()}`);
                setTimeout(() => {
                    this.menuDados(casino, this.tragamoneda);
                }, 2000);
                break;
            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, this.tragamoneda, this.tragamoneda2, this.blackjack, this.dado);
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 3.");
                setTimeout(() => {
                    this.menuDados(casino, this.tragamoneda);
                }, 2000);
                break;
        }
    }
}
exports.Menu = Menu;
