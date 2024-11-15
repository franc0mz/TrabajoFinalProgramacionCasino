export class Tragamoneda {

    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

     numeroRandom(){
        let numeroRandom = Math.random()*7;
        return Math.round(numeroRandom);
    }

    juego() {
        let numero1:number;
        let numero2:number;
        let numero3:number;

        
         numero1 = this.numeroRandom();
         numero2 = this.numeroRandom()
         numero3 = this.numeroRandom()
         console.log(numero1,numero2,numero3);

       if(numero1 == numero2 && numero2 == numero3){
            console.log("GANASTE");
       }else{
        console.log("QUE MALA SUERTE, INTENTA DE NUEVO");
       }
    }



}

let tragamoneda1 = new Tragamoneda("tragamoneda"); 
tragamoneda1.juego();
