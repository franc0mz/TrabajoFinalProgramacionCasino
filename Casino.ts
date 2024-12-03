import { Tragamoneda } from "./Tragamoneda";

export class Casino {
    public nombre : string;
    public saldo : number;
    
    constructor(nombre: string){
        this.nombre=nombre;
        this.saldo=10000; 
        
        

    }

    
    public getSaldo() : number {
        return this.saldo
    }
    
    public setSaldo(saldo : number) {
        this.saldo = saldo;
    }
}