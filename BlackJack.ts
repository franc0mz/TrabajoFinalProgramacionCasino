import * as rls from "readline-sync";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Casino } from "./Casino";
import { interfaceApuesta } from "./InterfazApuesta";

export class BlackJack extends MaquinaDeJuego implements interfaceApuesta{

    constructor(nombre:string){
        super(nombre)
    }


    public setApuesta(apuesta: number) {
        apuesta = rls.questionInt("Escriba cuanto desea apostar: ");
        this.apuesta = apuesta;
      }

juego(casino:Casino){
    
    console.log("Tu saldo acutal es: " + casino.getSaldo());
    this.setApuesta(this.apuesta)
    if (casino.getSaldo() - this.apuesta <= 0) {
        console.log("No tienes suficiente saldo.");
        return;
      }
      
      console.log("Usuario: ")
      let cartasUsuario = this.tirarCarta();
      
      console.log("Casino: ")
      let cartasCasino = this.tirarCarta();
      
      /*console.log("Usuario: ")
    cartasUsuario += this.tirarCarta();  
    console.log("Total Actual Usuario: " + cartasUsuario)*/
      
      let continuar:number= 0 //rls.questionInt("Quiere tirar otra carta? 1-Si 2-NO ");
    do {
        console.log("Usuario: ")
        cartasUsuario += this.tirarCarta();
        console.log(`Total Actual Usuario: ${cartasUsuario}`)
        if (cartasUsuario<22){
            continuar= rls.questionInt("Quiere tirar otra carta? 1-Si 2-NO ");
            if(continuar>2 || continuar<1 ){
              console.log("Opcion incorrecta")
            }
        }else{
            casino.saldo -= this.apuesta;
            console.log("Te pasaste de 21, Perdiste. Tu saldo acutal es: " + casino.getSaldo());
        }
      } while (continuar===1 && cartasUsuario<21)

    if (cartasUsuario<21&&continuar==2) {
    do {
        console.log("Casino: ")
        cartasCasino += this.tirarCarta();
        console.log(`Total Actual Casino: ${cartasCasino} Total Actual Usuario: ${cartasUsuario}`)
        if (cartasCasino>21){
            casino.saldo += this.apuesta * 2;
            console.log("¡Ganaste! Tu saldo acutal es: " + casino.getSaldo());
         } else if(cartasCasino==21&&cartasUsuario<21){
            casino.saldo -= this.apuesta;
            console.log("Perdiste. Tu saldo acutal es: " + casino.getSaldo());
         } else if(cartasCasino==cartasUsuario){
            console.log("Empate")
            //recuperar apuesta
         } else if (cartasCasino<21&& cartasCasino>cartasUsuario){
          casino.saldo -= this.apuesta;
            console.log("Perdiste. Tu saldo acutal es: " + casino.getSaldo());
         }
      } while (cartasCasino<17)
    }

    /*if (suma === 7 || suma === 11) {
      casino.saldo += this.apuesta * 2;
      console.log("¡Ganaste! Tu saldo acutal es: " + casino.getSaldo());
    } else if (suma === 2 || suma === 3 || suma === 12) {
      casino.saldo -= this.apuesta;
      console.log("Perdiste. Tu saldo acutal es: " + casino.getSaldo());
    } else */



};

tirarCarta():number{
    let carta = this.numeroRandom(10) + 1;
    console.log("La carta es: " + carta)
    return carta
}

}

