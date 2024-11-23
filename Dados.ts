import * as rls from 'readline-sync';
import { MaquinaDeJuego } from './MaquinaDeJuego';
import { Casino } from './Casino';
export class Dado extends MaquinaDeJuego {
   
    
    constructor(nombre:string){
        super(nombre)
        this.apuesta=5

    }


    public jugarDados(casino:Casino){
        let nuevaRonda = 0

        if (casino.getSaldo()-this.apuesta <= 0) {
          console.log("No tienes suficiente saldo.");
          return;
        }
    
        let suma=this.tirarDados()
       
        if (suma === 7 || suma === 11) {
          console.log("¡Ganaste!");
          casino.saldo += this.apuesta*2;
        } else if (suma === 2 || suma === 3 || suma === 12) {
          console.log("Perdiste.");
          casino.saldo -= this.apuesta;
        } else {
             do {
                 nuevaRonda=this.tirarDados()      
                    if (nuevaRonda===suma){
                        console.log("¡Ganaste!");
                        casino.saldo += this.apuesta*2;
                     } else if (nuevaRonda===7){
                        console.log("Perdiste.");
                        casino.saldo -= this.apuesta;
                     }
             } while(nuevaRonda!=7||nuevaRonda===suma);

        } 
        }
      
    

    
      tirarDados():number{
        let dado1 = this.numeroRandom(5)+1;
        let dado2 = this.numeroRandom(5)+1;
        let suma = dado1 + dado2;
        //Probar si lo retorna sin el return
        console.log(`Tiraste un ${dado1} y un ${dado2} (Total: ${suma})`);
        return suma;
      }

      setApuesta(): void {
        this.apuesta = rls.questionInt("Escriba el numero de la opcion deseada: ");
        throw new Error('Method not implemented.');
    }
    juego(casino: Casino): void {
        throw new Error('Method not implemented.');
    }
}
