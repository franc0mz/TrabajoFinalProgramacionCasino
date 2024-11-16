import * as rls from 'readline-sync';
import { Tragamoneda } from './TragamonedaIcon';

    function menuPrincipal() {
        console.clear();
        console.log(
            "Bienvenido al Casino\n" +
            "----------------------------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Juegos\n" +
            "3 - Saldo\n" +
            "4 - Salir\n" +
            "----------------------------------------")
        let elegir:number = rls.questionInt("Escriba el numero de la opcion deseada: ")
        console.clear();
        switch (elegir) {
            case 1:
                console.log("Opción 1: Instrucciones");
                break;
            case 2:
                console.log("Opción 2: Juegos");
                menuJuegos()
                break;
            case 3:
                console.log("Opción 3: Saldo");
                menuSaldo()
                break;
            case 4:
                console.log("Opción 4: Salir Completamente");
                break;
            default:
                console.log("Opcion no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {
                    menuPrincipal(); 
                }, 2000);
                break;
        }
            }

    function menuJuegos(){
        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Tragamonedas\n" +
            "2 - Blackjack\n" +
            "3 - Dados\n" +
            "4 - Volver al menu principal\n" +
            "----------------------------------------"
            )
            let elegir:number = rls.questionInt("Escriba el numero del juego deseado: ")
            console.clear()
            switch (elegir) {
                case 1:
                    console.log("Opción 1: Tragamonedas");
                    menuTragamonedas()
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
                    menuPrincipal()
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                    setTimeout(() => {
                        menuJuegos(); 
                    }, 2000);
                    break;
            }
    }

    function menuSaldo(){
        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Saldo Actual\n" +
            "2 - Volver al menu principal\n" +
            "----------------------------------------"
            )
            let elegir:number = rls.questionInt("Escriba el numero del juego deseado: ");
            console.clear();
            switch (elegir) {
                case 1:
                    console.log("Opción 1: Saldo Actual");
                    //saldoActual()
                    break;
                case 2:
                    console.log("Opción 2: Menu Principal");
                    menuPrincipal()
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 2");
                    setTimeout(() => {
                        menuSaldo(); 
                    }, 2000);
                    break;
            }
    }

    function menuTragamonedas(){
        console.clear();
        console.log(
            "----------------------------------------\n" +
            "1 - Instrucciones\n" +
            "2 - Jugar\n" +
            "3 - Saldo Actual\n" +
            "4 - Volver al menu principal\n" +
            "----------------------------------------"
            )
            let elegir:number = rls.questionInt("Escriba el numero de la opcion deseada: ")
            console.clear()
            switch (elegir) {
                case 1:
                    console.log("Opción 1: Instrucciones");
                    //Instrucciones()
                    break;
                case 2:
                    console.log("Opción 2: Jugar");
                    //PROVICIONAL
                    let tragamoneda1 = new Tragamoneda("tragamoneda");
                    tragamoneda1.juego();
                    break;
                case 3:
                    console.log("Opción 3: Saldo Actual");
                    //saldoActual()
                    break;
                case 4:
                    console.log("Opción 4: Volver al menu principal");
                    menuPrincipal()
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                    setTimeout(() => {
                        menuTragamonedas(); 
                    }, 2000);
                    break;
            }
    }


    
menuPrincipal()

    
