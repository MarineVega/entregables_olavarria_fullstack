"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("./Mago");
var Luchador_1 = require("./Luchador");
var Arquero_1 = require("./Arquero");
var MagoEvolucionado_1 = require("./MagoEvolucionado");
var Ataque_1 = require("./Ataque");
console.log(" ");
console.log(" ******************************************** PERSONAJE: MAGO *********************************************");
var mago1 = new Mago_1.Mago("Merlín", 3, "Magia");
//console.log(mago1);
mago1.atacar();
mago1.aumentarVida(2);
mago1.subirNivel(3);
console.log(mago1.mostrarDatos());
mago1.defender();
mago1.disminuirVida(3);
mago1.bajarNivel(2);
console.log(mago1.mostrarDatos());
var mago2 = new Mago_1.Mago("Gandalf", 7, "Magia");
console.log(mago2.mostrarDatos());
console.log(" ");
console.log(" ------------------------------------------- MAGO Evolucionado -------------------------------------------");
mago2 = new MagoEvolucionado_1.MagoEvolucionado("Gandalf", 10, "Magia de Luz");
console.log(mago2.mostrarDatos());
(mago2).crearIlusion();
console.log(" ");
console.log(" ------------------------------------------- MAGO que encontró una caja -------------------------------------------");
// Instancio el ataque
var ataque_fuego = new Ataque_1.Ataque("Magia con Fuego", "Varita de Oro", 5);
console.log(" Agrego nuevo ataque encontrado en la caja ");
// Seteo el ataque al mago
mago1.setAtaque(ataque_fuego);
console.log(mago1.mostrarAtaque());
console.log(" ");
console.log(" ******************************************** PERSONAJE: LUCHADOR *********************************************");
var luchador1 = new Luchador_1.Luchador("Thor", 5, "Fuerza");
var luchador2 = new Luchador_1.Luchador("Ragnar", 7, "Estratega");
console.log(luchador1.mostrarDatos());
luchador1.atacar();
luchador1.aumentarVida(10);
luchador1.subirNivel(5);
console.log(luchador1.mostrarDatos());
luchador1.defender();
luchador1.disminuirVida(3);
luchador1.bajarNivel(2);
console.log(luchador1.mostrarDatos());
luchador2.atacar();
luchador2.defender();
console.log(" ");
console.log(" ******************************************** PERSONAJE: ARQUERO *********************************************");
var arquero1 = new Arquero_1.Arquero("Robin Hood", 4, "Puntería");
console.log(arquero1.mostrarDatos());
arquero1.atacar();
arquero1.aumentarVida(8);
arquero1.subirNivel(4);
console.log(arquero1.mostrarDatos());
arquero1.defender();
arquero1.disminuirVida(1);
arquero1.bajarNivel(1);
console.log(arquero1.mostrarDatos());
