import { Tragamoneda } from "./Tragamoneda";
import { InterfazCasino } from "./InterfazCasino";
export class Casino implements InterfazCasino{
    public nombre : string;
    public saldo : number;
    public juego: Tragamoneda;
    constructor(nombre: string,juego:Tragamoneda){
        this.nombre=nombre;
        this.saldo=300;
        
        this.juego= juego;
        

    }

    
    public getSaldo() : number {
        return this.saldo
    }
    
    public setSaldo(saldo : number) {
        this.saldo = saldo;
    }
    public setJuego(juego:Tragamoneda){
        this.juego=juego;
    }
}