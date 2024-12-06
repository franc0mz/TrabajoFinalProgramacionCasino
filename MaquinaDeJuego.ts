import { Casino } from "./Casino";

export abstract class MaquinaDeJuego{

public nombre:string;
public apuesta:number = 0;

constructor(nombre:string){
    this.nombre=nombre
    //this.apuesta=0 INICIALICE "APUESTA" DIRECTAMENTE DECLARANDOLA ASI ESTA LINEA DEL CONSTRUCTOR LA PODEMOS SIMPLIFICAR PERO ESTA BIEN IGUAL ES LO MISMO.
}



abstract setApuesta(apuesta:number):void;
abstract juego(casino:Casino):void;


numeroRandom(numLimite:number) {
    let numeroRandom = Math.random() * numLimite;
    return Math.round(numeroRandom);
}


}