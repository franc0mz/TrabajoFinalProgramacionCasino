import * as rls from 'readline-sync';
import { Tragamoneda } from './Tragamoneda';
import { Casino } from './Casino';
import fs from 'node:fs'
import { MaquinaDeJuego } from './MaquinaDeJuego';
import { Dado } from './Dados';

export class Menu {
    public nombre: string;
    public casino: Casino;
    public tragamoneda: Tragamoneda
    public dado: Dado
    public instruccionesTragamonedas: string;
    public instruccionesBlackjack: string
    public instruccionesDados: string
    constructor(nombre: string, casino: Casino, tragamoneda: Tragamoneda, dado:Dado) {
        this.nombre = nombre
        this.casino = casino
        this.tragamoneda = tragamoneda
        this.dado=dado
        this.instruccionesTragamonedas = fs.readFileSync("./instruccionesTragamonedas.txt", "utf8");
        this.instruccionesBlackjack = fs.readFileSync("./instruccionesBlackjack.txt", "utf-8");
        this.instruccionesDados = fs.readFileSync("./instruccionesDados.txt", "utf8");

    }

    
    mostrarInstrucciones(instrucciones: string) {
        
        let instrTragamoneda: string = instrucciones.trim();
        let mostrInstrTragamoneda: string[] = instrTragamoneda.split(" ")
        return console.log(mostrInstrTragamoneda.join(' '));
    }
    menuPrincipal(casino: Casino, tragamoneda: Tragamoneda, dado:Dado) {
        console.clear();
        console.log(
            "Bienvenido al Casino\n" +
            "----------------------------------------\n" +
            "1 - Juegos\n" +
            "2 - Saldo\n" +
            "0 - Salir\n" +
            "----------------------------------------")
        let elegir: number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Juegos");
                this.menuJuegos(casino, tragamoneda, dado)
                break;
            case 2:
                console.log("Opción 2: Saldo");
                this.menuSaldo(casino, tragamoneda)
                break;
            case 0:
                console.log("Vuelva Pronto");
                setTimeout(() => {
                     
                }, 2000);
                break;
            default:
                console.log("Opcion no válida. Por favor, elige entre 0 y 2.");
                setTimeout(() => {
                    this.menuPrincipal(casino, tragamoneda, dado);
                }, 2000);
                break;
        }
    }

    menuJuegos(casino: Casino, tragamoneda: Tragamoneda,dado:Dado) {
        console.clear();
        console.log(
            "----------------JUEGOS-----------------\n" +
            "1 - Tragamonedas\n" +
            "2 - Blackjack\n" +
            "3 - Dados\n" +
            "0 - Volver al menu principal\n" +
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
                this.menuDados(casino, dado)
                break;
            case 4:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda, dado)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 3.");
                setTimeout(() => {
                    this.menuJuegos(casino, tragamoneda,dado);
                }, 2000);
                break;
        }
    }

    menuSaldo(casino: Casino, tragamoneda: Tragamoneda) {
        console.clear();
        console.log(
            "--------------SALDO--------------------\n" +
            "1 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero del juego deseado: ");
        console.clear();
        switch (elegir) {
            case 1:
                console.log(`Opción 1: Saldo Actual : ${casino.getSaldo()}`)
                setTimeout(() => {
                    this.menuSaldo(casino, tragamoneda)
                }, 2000)
                break;
            case 0:
                console.log("Opción 0: Menu Principal");
                this.menuPrincipal(casino, tragamoneda, this.dado)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 1");
                setTimeout(() => {
                    this.menuSaldo(casino, tragamoneda);
                }, 2000);
                break;
        }
    }

    menuTragamonedas(casino: Casino, MaquinaDeJuego: MaquinaDeJuego) {

        console.clear();
        console.log(
            "---------------TRAGAMONEDAS-------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar\n" +
            "3 - Modificar Apuesta\n" +
            "4 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
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
                    this.menuTragamonedas(casino, MaquinaDeJuego);
                }, 7000);
                break;
            case 2:
                console.log("Opción 2: Jugar");
                let elegir: number = 1
                while (elegir === 1) {
                    this.tragamoneda.juego(casino)
                    elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ")
                    console.clear()
                }

                this.menuTragamonedas(casino, MaquinaDeJuego)

                break;

            case 3:
                console.log("Opción 3: Modificar apuesta")
                this.menuModificarApuesta(casino, this.tragamoneda)
              //  setTimeout(() => {
            //        this.menuTragamonedas(casino, tragamoneda)
            //    }, 2000)
                break;
            case 4:

                //saldoActual()
                console.log(`Opción 4: Saldo Actual : ${casino.getSaldo()}`)
                setTimeout(() => {
                    this.menuTragamonedas(casino, this.tragamoneda)
                }, 2000)
                break;
            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, this.tragamoneda,this.dado)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {  
                    this.menuTragamonedas(casino, this.tragamoneda);                
                }, 2000)
                break;
        }
    }
    //poner menu de modificar apuestas dentro de jugar 

    menuModificarApuesta(casino: Casino, tragamoneda: Tragamoneda) {

        console.clear();
        console.log(
            "-----------MODIFICAR APUESTA------------\n" +
            "1 - Valor de la apuesta 5\n" +
            "2 - Valor de la apuesta 10\n" +
            "3 - Valor de la apuesta 12\n" +
            "0 - Volver al menu principal\n" +
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
                console.log("Opción 3: Valor de la apuesta 12")
                tragamoneda.setApuesta(12)
                tragamoneda.setMuliplicador(4)
                setTimeout(() => {
                    this.menuTragamonedas(casino, tragamoneda)
                }, 2000)
                break;

            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, tragamoneda, this.dado)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 0 y 3.");              
                setTimeout(() => {  
                    this.menuTragamonedas(casino, tragamoneda);                
                }, 2000)
                break;
        }
    }

    menuDados(casino: Casino, MaquinaDeJuego: MaquinaDeJuego) {

        console.clear();
        console.log(
            "-----------------DADOS------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar\n" +
            "3 - Saldo Actual\n" +
            "0 - Volver al menu principal\n" +
            "----------------------------------------"
        )
        let elegir: number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear()
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
                let elegir: number = 1
                while (elegir === 1) {
                    this.dado.juego(casino)
                    elegir = rls.questionInt("Seguir jugando 1: \nVolver al menu 2: ")
                    console.clear()
                }

                this.menuDados(casino, MaquinaDeJuego)

                break;
                case 3:
                //saldoActual()
                console.log(`Opción 4: Saldo Actual : ${casino.getSaldo()}`)
                setTimeout(() => {
                    this.menuDados(casino, this.tragamoneda)
                }, 2000)
                break;
            case 0:
                console.log("Opción 0: Volver al menu principal");
                this.menuPrincipal(casino, this.tragamoneda, this.dado)
                break;
            default:
                console.log("Opción no válida. Por favor, elige entre 1 y 3.");
                setTimeout(() => {  
                    this.menuDados(casino, this.tragamoneda);                
                }, 2000)
                break;
        }
    }
}
