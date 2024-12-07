import { Tragamoneda } from "./Tragamoneda";
import { Usuario } from "./Usuario";
import { Menu } from "./Menu";
import { Dado } from "./Dados";
import { Tragamoneda2 } from "./Tragamonedas2";
import { BlackJack } from "./BlackJack";
let tragamoneda1 = new Tragamoneda("tragamoneda")
let usuario1 = new Usuario("")
let tragamoneda2 = new Tragamoneda2("tragamoneda2")
let blackJack1 = new BlackJack("blackjack1")
let dado1=new Dado ("Dados")
let menu1=new Menu("menu",usuario1,tragamoneda1,tragamoneda2,dado1,blackJack1);

menu1.menuPrincipal(usuario1,tragamoneda1,tragamoneda2,dado1,blackJack1)

