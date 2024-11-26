import { Tragamoneda } from "./Tragamoneda";
import { Sesion } from "./Sesion";
import { Casino } from "./Casino";
import { Menu } from "./Menu";
import { Dado } from "./Dados";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Tragamoneda2 } from "./Tragamonedas2";
let tragamoneda1 = new Tragamoneda("tragamoneda")
let tragamoneda2 = new Tragamoneda2("tragamoneda2")

let dado1=new Dado ("Dados")
let casino1= new Casino("casino",tragamoneda1);
let menu1=new Menu("menu",casino1,tragamoneda1,tragamoneda2,dado1);

menu1.menuPrincipal(casino1,tragamoneda1,tragamoneda2,dado1)

//menu1.menuTragamonedas(casino1,tragamoneda2)

//dado1.jugarDados(casino1)