import { InterfazSaldo } from "./InterfazSaldo";
import { Sesion } from "./Sesion";

export class Tragamoneda implements InterfazSaldo{

    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // Definir los emojis de frutas
    private frutas: string[] = ['🍎', '🍌', '🍉'];

    numeroRandom(): string {
        // Generar un número aleatorio entre 0 y 2 y devolver el emoji correspondiente
        return this.frutas[Math.floor(Math.random() * 3)];
    }

    juego() {
        let numero1 = this.numeroRandom();
        let numero2 = this.numeroRandom();
        let numero3 = this.numeroRandom();

        console.log(numero1, numero2, numero3);

        if (numero1 === numero2 && numero2 === numero3) {
            console.log("GANASTE");
           
        } else {
            console.log("QUE MALA SUERTE, INTENTA DE NUEVO");
        }
    }

    mostrarInstrucciones(){
        console.log("Intrucciones tragamoneda")
    };

    mostrarSaldo(){
        return 
    };

    modificarSaldo(){ 
        return   2    
    };

}

let tragamoneda1 = new Tragamoneda("tragamoneda");
tragamoneda1.juego();

