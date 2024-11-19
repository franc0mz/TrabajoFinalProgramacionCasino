import { Tragamoneda } from "./Tragamoneda";

export interface InterfazCasino {

    getSaldo():number;
    setSaldo(saldo:number):void;
    setJuego(juego:Tragamoneda):void;


}