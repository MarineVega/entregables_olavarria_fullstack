import { Vehiculo } from "./Vehiculo";
import { RegistroAutomotor } from "./RegistroAutomotor";

// Creo vehículos
const vehiculo1: Vehiculo = new Vehiculo("Auto", "Ford2", "Fiesta", "MNA321", "Sandra Perez", 2013);
const vehiculo2: Vehiculo = new Vehiculo("Auto", "Ford", "Mondeo", "AF254PM", "Mario Lopez", 2023);
const vehiculo3: Vehiculo = new Vehiculo("Moto", "Yamaha", "FZ 250", "D487AAT", "Javier Leal", 2024);
const vehiculo4: Vehiculo = new Vehiculo("Moto", "Yamaha", "FZ 250", "D487AAU", "Javier Leal", 2024);
const vehiculo5: Vehiculo = new Vehiculo("Auto", "Volkswagen", "Gol Power", "DEV123", "Soledad Viale");

// Creo registros automotor
const registroAutomotor1: RegistroAutomotor = new RegistroAutomotor("Registro Nº 1");
const registroAutomotor2: RegistroAutomotor = new RegistroAutomotor("Registro Nº 3");

// Vehículos que pertenecen a un registro
registroAutomotor1.agregarVehiculo(vehiculo1);
registroAutomotor1.agregarVehiculo(vehiculo2);
registroAutomotor1.agregarVehiculo(vehiculo3);
registroAutomotor1.agregarVehiculo(vehiculo4);
registroAutomotor1.agregarVehiculo(vehiculo5);


// Ver lista de Vehículos del registro 1        --> map muestra en una línea lo q está en un arreglo
console.log("Vehículos del ", registroAutomotor1.getNombre(), ": " , registroAutomotor1.getListaVehiculos().map(vehiculo => vehiculo.getVehiculo()));


// Elimino un vehículo del registro
registroAutomotor1.bajaVehiculo(vehiculo2);


// Ver lista de Vehículos del registro 1        --> map muestra en una línea lo q está en un arreglo
console.log("Vehículos del ", registroAutomotor1.getNombre(), " (dsps de Eliminar): " , registroAutomotor1.getListaVehiculos().map(vehiculo => vehiculo.getVehiculo()));

// Modifico vehículo del registro
registroAutomotor1.modificarVehiculo(vehiculo4,null,null,null,"D887AAU",null,null);
registroAutomotor1.modificarVehiculo(vehiculo5,null,null,null,null,null,2003);

console.log("Vehículos del ", registroAutomotor1.getNombre(), "(dsps de Modificar): " , registroAutomotor1.getListaVehiculos().map(vehiculo => vehiculo.getVehiculo()));

