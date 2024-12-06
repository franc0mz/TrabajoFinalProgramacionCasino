import * as rls from "readline-sync";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Usuario } from "./Usuario";
import { interfaceApuesta } from "./InterfazApuesta";

export class BlackJack extends MaquinaDeJuego implements interfaceApuesta {
  constructor(nombre: string) {
    super(nombre);
  }

  public setApuesta(apuesta: number) {
    apuesta = rls.questionInt("Escriba cuanto desea apostar: ");
    this.apuesta = apuesta;
  }

  juego(usuario: Usuario) {
    let mostrarApuesta:number=0;
    console.log("Tu saldo acutal es: " + usuario.getSaldo());
    this.setApuesta(this.apuesta);
    if (this.apuesta < 100) {
      console.log("Apuesta minima es 100");
      return;
    } else if (usuario.getSaldo() - this.apuesta < 0) {
      console.log("No tienes suficiente saldo.");
      return;
    }

    console.log("Usuario: ");
    let cartasUsuario = this.tirarCarta();

    console.log("Casino: ");
    let cartasCasino = this.tirarCarta();

    /*console.log("Usuario: ")
    cartasUsuario += this.tirarCarta();  
    console.log("Total Actual Usuario: " + cartasUsuario)*/

    let continuar: number = 0; //rls.questionInt("Quiere tirar otra carta? 1-Si 2-NO ");
    do {
      console.log("Usuario: ");
      cartasUsuario += this.tirarCarta();
      console.log(`Total Actual Usuario: ${cartasUsuario}`);
      if (cartasUsuario < 22) {
        continuar = rls.questionInt("Quiere tirar otra carta? 1-Si 2-NO ");
        if (continuar > 2 || continuar < 1) {
          console.log("Opcion incorrecta");
        }
      } else {
        usuario.saldo -= this.apuesta;
        mostrarApuesta= this.apuesta;
        console.log(`¡Te pasaste de 21, Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
       
      }
    } while (continuar === 1 && cartasUsuario <= 21);

    if (cartasUsuario <= 21 && continuar == 2) {
      do {
        console.log("Casino: ");
        cartasCasino += this.tirarCarta();
        console.log(
          `Total Actual Casino: ${cartasCasino} Total Actual Usuario: ${cartasUsuario}`
        );
        if (cartasCasino > 21) {
          usuario.saldo += this.apuesta * 2;
          mostrarApuesta= this.apuesta * 2;
          console.log(`¡Ganaste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
        } else if (cartasCasino == 21 && cartasUsuario < 21) {
          usuario.saldo -= this.apuesta;
          mostrarApuesta= this.apuesta;
          console.log(`¡Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
        } else if (cartasCasino == cartasUsuario && cartasCasino >= 17) {
          console.log("Empate");
          //recuperar apuesta
        } else if (cartasCasino < 21 && cartasCasino > cartasUsuario) {
          usuario.saldo -= this.apuesta;
          mostrarApuesta= this.apuesta;
          console.log(`¡Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
        }
      } while (cartasCasino < 17 && cartasUsuario >= cartasCasino);
    }
  }

  tirarCarta(): number {
    let carta = this.numeroRandom(10) + 1;
    console.log("La carta es: " + carta);
    return carta;
  }
}
