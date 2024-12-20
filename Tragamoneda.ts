import { Usuario } from "./Usuario";
import { interfaceApuesta } from "./InterfazApuesta";
import { MaquinaDeJuego } from "./MaquinaDeJuego";

export class Tragamoneda extends MaquinaDeJuego implements interfaceApuesta {
  public apuesta: number;
  public multiplicador: number;
  constructor(nombre: string) {
    super(nombre);
    this.apuesta = 5;
    this.multiplicador = 2;
  }

  public setApuesta(apuesta: number) {
    this.apuesta = apuesta;
  }

  public setMuliplicador(multiplicador: number) {
    this.multiplicador = multiplicador;
  }
  numeroRandom() {
    let numeroRandom = Math.random() * 3;
    return Math.round(numeroRandom);
  }

  juego(usuario: Usuario) {
    let mostrarApuesta:number=0;
    if (usuario.getSaldo() - this.apuesta >= 0) {
      let numero1: number;
      let numero2: number;
      let numero3: number;

      numero1 = this.numeroRandom();
      numero2 = this.numeroRandom();
      numero3 = this.numeroRandom();
      console.log(numero1, numero2, numero3);

      if (numero1 == numero2 && numero2 == numero3) {
        mostrarApuesta= this.apuesta * this.multiplicador;
        usuario.setSaldo(usuario.saldo + this.apuesta * this.multiplicador);
        console.log(`¡Ganaste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
      } else {
        usuario.setSaldo(usuario.saldo - this.apuesta);
        mostrarApuesta= this.apuesta;
          console.log(`¡Perdiste: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
      }
    } else {
      console.log("Saldo insuficiente");
    }
  }
}
