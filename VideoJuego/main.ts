import { Personaje } from "./Personaje";
import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { MagoEvolucionado } from "./MagoEvolucionado";
import { Ataque } from "./Ataque";


console.log(" ");
console.log(" ******************************************** PERSONAJE: MAGO *********************************************");

let mago1: Mago = new Mago ("Merlín", 3, "Magia");
//console.log(mago1);

mago1.atacar();
mago1.aumentarVida(2);
mago1.subirNivel(3);
console.log(mago1.mostrarDatos());
mago1.defender();
mago1.disminuirVida(3);
mago1.bajarNivel(2);
console.log(mago1.mostrarDatos());

let mago2: Mago = new Mago ("Gandalf", 7, "Magia");
console.log(mago2.mostrarDatos());

console.log(" ");
console.log(" ------------------------------------------- MAGO Evolucionado -------------------------------------------");

mago2 = new MagoEvolucionado ("Gandalf",10, "Magia de Luz");
console.log(mago2.mostrarDatos());

((mago2) as MagoEvolucionado).crearIlusion();

console.log(" ");
console.log(" ------------------------------------------- MAGO que encontró una caja -------------------------------------------");
let ataque: Ataque;
ataque.MostrarAtaque();
//mago1.getAtaque();

console.log(" ");
console.log(" ******************************************** PERSONAJE: LUCHADOR *********************************************");

let luchador1: Luchador = new Luchador ("Thor", 5, "Fuerza");
let luchador2: Luchador = new Luchador ("Ragnar", 7, "Estratega");

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

let arquero1: Arquero = new Arquero ("Robin Hood", 4, "Puntería");
console.log(arquero1.mostrarDatos());
arquero1.atacar();
arquero1.aumentarVida(8);
arquero1.subirNivel(4);
console.log(arquero1.mostrarDatos());
arquero1.defender();
arquero1.disminuirVida(1);
arquero1.bajarNivel(1);
console.log(arquero1.mostrarDatos());







