export class Sesion {

    public saldo:number;
      
   
   
   
   constructor(saldo:number = 1000){
       this.saldo=saldo;
   }
   
   
   
   
   getSaldo():number{
       return this.saldo;
   }
   
   setNuevoSaldo(nuevoSaldo:number){
       this.saldo = nuevoSaldo;
   }
   
   mostrarSaldo():void{
       console.log(this.saldo);
   }
   
   
   
   }
   
let sesion1 = new Sesion(10000);
sesion1.mostrarSaldo(); // ACA MOSTRAMOS EL SALDO USANDO EL METODO QUE SE CREO
   //console.log (sesion1.saldo)