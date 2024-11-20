import { Casino } from "./Casino";

export abstract class MaquinaDeJuego{

public nombre:string;
public apuesta:number;

constructor(nombre:string){
    this.nombre=nombre
    this.apuesta=0
}



abstract setApuesta(apuesta:number):void;
abstract juego(casino:Casino):void;



}