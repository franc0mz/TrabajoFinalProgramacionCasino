import { Tragamoneda } from "./Tragamoneda";
import { Usuario } from "./Usuario";
import { Casino } from "./Casino";
import { Menu } from "./Menu";
import { Dado } from "./Dados";
import { MaquinaDeJuego } from "./MaquinaDeJuego";
import { Tragamoneda2 } from "./Tragamonedas2";
import { BlackJack } from "./BlackJack";
let tragamoneda1 = new Tragamoneda("tragamoneda")
let usuario1 = new Usuario("")
let tragamoneda2 = new Tragamoneda2("tragamoneda2")
let blackJack1 = new BlackJack("blackjack1")
let dado1=new Dado ("Dados")
let casino1= new Casino("casino",tragamoneda1);
let menu1=new Menu("menu",usuario1,casino1,tragamoneda1,tragamoneda2,dado1,blackJack1);

menu1.menuPrincipal(casino1,tragamoneda1,tragamoneda2,dado1,blackJack1)

//menu1.menuTragamonedas(casino1,tragamoneda2)

//dado1.jugarDados(casino1)