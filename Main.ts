import { Tragamoneda } from "./Tragamoneda";
import { Sesion } from "./Sesion";
import { Casino } from "./Casino";
import { Menu } from "./Menu";
import { Dado } from "./Dados";
let tragamoneda2 = new Tragamoneda("tragamoneda")

let casino1= new Casino("casino",tragamoneda2);

let menu1=new Menu("menu",casino1,tragamoneda2);

menu1.menuPrincipal(casino1,tragamoneda2)

//menu1.menuTragamonedas(casino1,tragamoneda2)
let dado1=new Dado ("Dados")
dado1.jugarDados(casino1)