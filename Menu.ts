import * as rls from 'readline-sync';
import { Tragamoneda } from './Tragamoneda';
import { Sesion } from './Sesion';
import { Casino } from './Casino';


export class Menu{
    public nombre :string;
    public casino:Casino;
    public tragamoneda:Tragamoneda
    constructor(nombre:string,casino:Casino,tragamoneda:Tragamoneda){
        this.nombre=nombre
        this.casino =casino
        this.tragamoneda=tragamoneda
    }
     menuPrincipal(casino:Casino,tragamoneda:Tragamoneda) {
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
                this.menuJuegos(casino,tragamoneda)
                break;
            case 3:
                console.log("Opción 3: Saldo");
                this.menuSaldo(casino,tragamoneda)
                break;
            case 4:
                console.log("Opción 4: Salir Completamente");
                break;
            default:
                console.log("Opcion no válida. Por favor, elige entre 1 y 4.");
                setTimeout(() => {
                    this.menuPrincipal(casino,tragamoneda); 
                }, 2000);
                break;
        }
            }

     menuJuegos(casino:Casino,tragamoneda:Tragamoneda){
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
                    this.menuTragamonedas(casino,tragamoneda)
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
                    this.menuPrincipal(casino,tragamoneda)
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                    setTimeout(() => {
                        this.menuJuegos(casino,tragamoneda); 
                    }, 2000);
                    break;
            }
    }

     menuSaldo(casino:Casino,tragamoneda:Tragamoneda){
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
                    this.menuPrincipal(casino,tragamoneda)
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 2");
                    setTimeout(() => {
                        this.menuSaldo(casino,tragamoneda); 
                    }, 2000);
                    break;
            }
    }

     menuTragamonedas(casino:Casino,tragamoneda:Tragamoneda){
        
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
                 //   let tragamoneda1 = new Tragamoneda("tragamoneda");
                 //   tragamoneda1.juego();
                    tragamoneda.juego(casino,casino.getSaldo())
                        
             //       this.menuTragamonedas(casino,tragamoneda)

              setTimeout(() => {
                this.menuTragamonedas(casino,tragamoneda)
            }, 2000)

                    break;
                case 3:
                    console.log("Opción 3: Saldo Actual");
                    //saldoActual()
                    break;
                case 4:
                    console.log("Opción 4: Volver al menu principal");
                    this.menuPrincipal(casino,tragamoneda)
                    break;
                default:
                    console.log("Opción no válida. Por favor, elige entre 1 y 4.");
                    setTimeout(() => {
                        this.menuTragamonedas(casino,tragamoneda); 
                    }, 2000);
                    break;
            }
    }

}
    
