import * as rls from "readline-sync";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Usuario } from "./Usuario";
import { interfaceApuesta } from "./InterfazApuesta";
export class Dado extends MaquinaDeJuego implements interfaceApuesta {
  constructor(nombre: string) {
    super(nombre);
    this.apuesta = 5;
  }

  public juego(usuario:Usuario) {
    let nuevaRonda: number = 0;
    let validador: boolean = false;
    let mostrarApuesta:number=0;
    this.setApuesta(this.apuesta);
    if  (usuario.getSaldo() - this.apuesta < 0 ) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    let suma = this.tirarDados();

    if (suma === 7 || suma === 11) {
      usuario.saldo += this.apuesta * 2;
      mostrarApuesta= this.apuesta * 2;
      console.log(`¡Ganaste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
    } else if (suma === 2 || suma === 3 || suma === 12) {
      usuario.saldo -= this.apuesta;
      mostrarApuesta= this.apuesta;
          console.log(`¡Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
    } else {
      do {
        nuevaRonda = this.tirarDados();
        if (nuevaRonda === suma) {
          usuario.saldo += this.apuesta * 2;
          mostrarApuesta= this.apuesta * 2;
          console.log(`¡Ganaste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
          validador = true;
        } else if (nuevaRonda === 7) {
          usuario.saldo -= this.apuesta;
          mostrarApuesta= this.apuesta;
          console.log(`¡Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
          validador = true;
        }
      } while (validador === false);
    }
  }

  tirarDados(): number {
    let dado1 = this.numeroRandom(5) + 1;
    let dado2 = this.numeroRandom(5) + 1;
    let suma = dado1 + dado2;
    //Probar si lo retorna sin el return
    console.log(`Tiraste un ${dado1} y un ${dado2} (Total: ${suma})`);
    return suma;
  }

  public setApuesta(apuesta: number) {
    apuesta = rls.questionInt("Escriba cuanto desea apostar: ");
    this.apuesta = apuesta;
  }
  
}
