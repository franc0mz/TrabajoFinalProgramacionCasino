import * as rls from "readline-sync";
export class Usuario {

    
    public nombre:string
    public saldo:number;
   
   constructor(nombre:string, saldo?:number){
       this.saldo=1000;
       this.nombre=nombre
   }
   
   getSaldo():number{
       return this.saldo;
   }
   getNombre():string{
    return this.nombre
   }
   setNuevoSaldo(nuevoSaldo:number){
       this.saldo = nuevoSaldo;
   }
   
   setNombre(){
    this.nombre = rls.question("Escriba su Nombre: ");
    }
   mostrarSaldo():void{
       console.log(this.saldo);
   }
   
   }
   
   