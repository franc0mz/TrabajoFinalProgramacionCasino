export class Sesion {

    public saldo:number;
      
   
   
   
   constructor(saldo?:number){
       this.saldo=1000;
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
   
   let sesion1 = new Sesion (10000) ;
   console.log (sesion1.saldo)