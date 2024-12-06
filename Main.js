"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tragamoneda_1 = require("./Tragamoneda");
const Casino_1 = require("./Casino");
const Menu_1 = require("./Menu");
const Blackjack_1 = require("./Blackjack");
const Dados_1 = require("./Dados");
const Tragamonedas2_1 = require("./Tragamonedas2");
let tragamoneda1 = new Tragamoneda_1.Tragamoneda("tragamoneda");
let tragamoneda2 = new Tragamonedas2_1.Tragamoneda2("tragamoneda2");
let blackjack1 = new Blackjack_1.Blackjack("Blackjack");
let dado1 = new Dados_1.Dado("Dados");
let casino1 = new Casino_1.Casino("casino", tragamoneda1);
let menu1 = new Menu_1.Menu("menu", casino1, tragamoneda1, tragamoneda2, blackjack1, dado1);
menu1.menuPrincipal(casino1, tragamoneda1, tragamoneda2, blackjack1, dado1);
//menu1.menuTragamonedas(casino1,tragamoneda2)
//dado1.jugarDados(casino1)
