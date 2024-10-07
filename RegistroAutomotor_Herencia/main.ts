import { RegistroAutomotor } from "./RegistroAutomotor";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

// Creo registro automotor
const registroAutomotor1: RegistroAutomotor = new RegistroAutomotor("Registro Nº 1");
//console.log(registroAutomotor1)


// Creo camiones y los agrego al registro
registroAutomotor1.agregarCamion("Scania","113",2003,"MCR123","Pedro",25,2,true);
registroAutomotor1.agregarCamion("Scania","Serie R",2023,"AF333PY","Alberto",24,2,true);
registroAutomotor1.agregarCamion("Scania","113",2003,"MCR123","Pedro",25,2,true);
registroAutomotor1.agregarCamion("Mercedes Benz","1620",2007,"GEB587","Carlos",20,2,false);

registroAutomotor1.agregarMoto("Yamaha","FZ 250",2024,"D487AAT","Javier Leal",250,true);
registroAutomotor1.agregarMoto("Yamaha","FZ 250",2024,"D487AAU","Javier Leal",250,true);
registroAutomotor1.agregarMoto("Yamaha","F 150",2023,"A123GGA","Leandro",150,false)

console.log(registroAutomotor1)

let moto: Moto = new Moto ("Yamaha","FZ 250",2024,"D487AAU","Javier Leal",250,true);
let moto2: Moto = new Moto ("Yamaha","FZ 250",2024,"D487BB2","Javier Leal",250,true);

// Elimino una moto del registro
registroAutomotor1.eliminarMoto(moto);
console.log(registroAutomotor1)

// Modifico moto del registro
registroAutomotor1.modificarMoto(moto,moto2);
console.log(registroAutomotor1)
