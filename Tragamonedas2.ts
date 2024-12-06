import { Usuario } from "./Usuario";
import { interfaceApuesta } from "./InterfazApuesta";
import { MaquinaDeJuego } from "./MaquinaDeJuego";

export class Tragamoneda2 extends MaquinaDeJuego implements interfaceApuesta {
  public apuesta: number;
  public multiplicador: number;
  constructor(nombre: string) {
    super(nombre);
    this.apuesta = 10;
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
      let numero4: number;
      let numero5: number;

      numero1 = this.numeroRandom();
      numero2 = this.numeroRandom();
      numero3 = this.numeroRandom();
      numero4 = this.numeroRandom();
      numero5 = this.numeroRandom();

      console.log(numero1, numero2, numero3, numero4, numero5);

      if (
        numero1 == numero2 &&
        numero1 == numero3 &&
        numero1 == numero4 &&
        numero1 == numero5
      ) { 
        mostrarApuesta= this.apuesta * this.multiplicador * 2;
        usuario.setSaldo(usuario.saldo + this.apuesta * this.multiplicador * 2);
        console.log(`¡GANASTE QUINTUPLE NUMERO: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
      } else if (
        (numero1 == numero2 && numero1 == numero3) ||
        (numero2 == numero3 && numero2 == numero4) ||
        (numero3 == numero4 && numero3 == numero5)
      ) {
        mostrarApuesta= this.apuesta * this.multiplicador
        usuario.setSaldo(usuario.saldo + this.apuesta * this.multiplicador);
        console.log(`¡GANASTE TRIPLE NUMERO: $${mostrarApuesta}! Tu saldo acutal es:  $${usuario.getSaldo()}`);
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
