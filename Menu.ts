import * as rls from 'readline-sync';
import { Tragamoneda } from './Tragamoneda';
import { Casino } from './Casino';
import fs from 'node:fs'

export class Menu {
    public nombre: string;
    public casino: Casino;
    public tragamoneda: Tragamoneda
    public instruccionesTragamonedas: string;
    public instruccionesBlackjack: string
    public instruccionesDados: string
    constructor(nombre: string, casino: Casino, tragamoneda: Tragamoneda) {
        this.nombre = nombre
        this.casino = casino
        this.tragamoneda = tragamoneda
        this.instruccionesTragamonedas = fs.readFileSync("./instruccionesTragamonedas.txt", "utf8");
        this.instruccionesBlackjack = fs.readFileSync("./instruccionesBlackjack.txt", "utf-8");
        this.instruccionesDados = fs.readFileSync("./instruccionesDados.txt", "utf8");

    }

    
    mostrarInstrucciones(instrucciones: string) {
        
        let instrTrag: string = instrucciones.trim();
        let mostrInstrTragamones: string[] = instrTrag.split(" ")
        return console.log(mostrInstrTragamones.join(' '));
    }
    menuPrincipal(casino: Casino, tragamoneda: Tragamoneda) {
        console.clear();
        console.log(
            "Bienvenido al Casino\n" +
            "----------------------------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Juegos\n" +
            "3 - Saldo\n" +
            "4 - Salir\n" +
            "----------------------------------------")
        let elegir: number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                break;
            case 2:
                console.log("Opción 2: Juegos");
                this.menuJuegos(casino, tragamoneda)
                break;
            case 3:
                console.log("Opción 3: Saldo");
                this.menuSaldo(casino, tragamoneda)
                break;
            case 4:
                console.log("Opción 4: Salir Completamente");
                break;
            default:
                console.log("Opcion no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {
                    this.menuPrincipal(casino, tragamoneda);
                }, 2000);
                break;
        }
    }

    menuJuegos(casino: Casino, tragamoneda: Tragamoneda) {
        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Tragamonedas\n" +
            "2 - Blackjack\n" +
            "3 - Dados\n" +
            "4 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero del juego deseado: ")
        console.clear()
        switch (elegir) {
            case 1:
                console.log("Opción 1: Tragamonedas");
                this.menuTragamonedas(casino, tragamoneda)
                break;
            case 2:
                console.log("Opción 2: BlackJack");
                //BlackJack()
                break;
            case 3:
                console.log("Opción 3: Dados");
                //Dados()
                break;
            case 4:
                console.log("Opción 4: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {
                    this.menuJuegos(casino, tragamoneda);
                }, 2000);
                break;
        }
    }

    menuSaldo(casino: Casino, tragamoneda: Tragamoneda) {
        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Saldo Actual\n" +
            "2 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero del juego deseado: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log(`Opción 4: Saldo Actual : ${casino.getSaldo()}`)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda)
                }, 2000)
                break;
            case 2:
                console.log("Opción 2: Menu Principal");
                this.menuPrincipal(casino, tragamoneda)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 2");
                setTimeout(() => {
                    this.menuSaldo(casino, tragamoneda);
                }, 2000);
                break;
        }
    }

    menuTragamonedas(casino: Casino, tragamoneda: Tragamoneda) {

        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar\n" +
            "3 - Modificar Apuesta\n" +
            "4 - Saldo Actual\n" +
            "5 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear()
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                //Instrucciones()
                this.mostrarInstrucciones(this.instruccionesTragamonedas);
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda);
                }, 2000);
                break;
            case 2:
                console.log("Opción 2: Jugar");
                let elegir: number = 1
                while (elegir === 1) {
                    tragamoneda.juego(casino)
                    elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ")
                    console.clear()
                }

                this.menuTragamonedas(casino, tragamoneda)

                break;

            case 3:
                console.log(`Opción 3: Modificar apuesta`)
                this.menuModificarApuesta(casino, tragamoneda)
              //  setTimeout(() => {
            //        this.menuTragamonedas(casino, tragamoneda)
            //    }, 2000)
                break;
            case 4:

                //saldoActual()
                console.log(`Opción 4: Saldo Actual : ${casino.getSaldo()}`)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda)
                }, 2000)
                break;
            case 5:
                console.log("Opción 5: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 4.");

                this.menuTragamonedas(casino, tragamoneda);

                break;
        }
    }
    //poner menu de modificar apuestas dentro de jugar 

    menuModificarApuesta(casino: Casino, tragamoneda: Tragamoneda) {

        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Valor de la apuesta 5\n" +
            "2 - Valor de la apuesta 10\n" +
            "3 - Valor de la apuesta 15\n" +
            "4 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear()
        switch (elegir) {
            case 1:
                console.log("Opción 1: Valor de la apuesta 5");
                tragamoneda.setApuesta(5)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda);
                }, 2000);
                break;

            case 2:
                console.log("Opción 2: Valor de la apuesta ahora es 10");
                tragamoneda.setApuesta(10)
                tragamoneda.setMuliplicador(3)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda)
                }, 2000)
                break;

            case 3:
                //saldoActual()
                console.log(`Opción 3: Valor de la apuesta 12`)
                tragamoneda.setApuesta(12)
                tragamoneda.setMuliplicador(4)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda)
                }, 2000)
                break;

            case 4:
                console.log("Opción 4: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 4.");

                this.menuTragamonedas(casino, tragamoneda);

                break;
        }
    }
}
