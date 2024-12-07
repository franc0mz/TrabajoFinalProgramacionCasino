import { Usuario } from "./Usuario";

export abstract class MaquinaDeJuego {
  public nombre: string;
  public apuesta: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.apuesta = 0;
  }
  abstract juego(usuario: Usuario): void;

  numeroRandom(numLimite: number): number {
    let numeroRandom = Math.random() * numLimite;
    return Math.round(numeroRandom);
  }
}
