import * as rls from "readline-sync";
export class Usuario {
  public nombre: string;
  public saldo: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.saldo = 0;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setSaldo(saldo: number) {
    this.saldo = saldo;
  }

  getNombre(): string {
    return this.nombre;
  }

  setNombre() {
    this.nombre = rls.question("Escriba su Nombre: ");
  }

  agregarSaldo() {
    let nuevosaldo: number = rls.questionInt("Escriba el saldo a agregar: ");
    if (nuevosaldo > 1000000) {
      console.log("Ingrese un monto menor");
    } else if (nuevosaldo < 100) {
      console.log("Agregue un monto mayor a 100");
    } else {
      this.saldo = this.saldo + nuevosaldo;
    }
  }
}
