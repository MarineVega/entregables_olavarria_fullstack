"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
// Creo vehículos
var vehiculo1 = new Vehiculo_1.Vehiculo("Auto", "Ford", "Fiesta", "MNA321", "Sandra Perez", 2013);
var vehiculo2 = new Vehiculo_1.Vehiculo("Auto", "Ford", "Mondeo", "AF254PM", "Mario Lopez", 2023);
var vehiculo3 = new Vehiculo_1.Vehiculo("Moto", "Yamaha", "FZ 250", "D487AAT", "Javier Leal", 2024);
var vehiculo4 = new Vehiculo_1.Vehiculo("Moto", "Yamaha", "FZ 250", "D487AAU", "Javier Leal", 2024);
var vehiculo5 = new Vehiculo_1.Vehiculo("Auto", "Volkswagen", "Gol Power", "DEV123", "Soledad Viale");
// Creo registros automotor
var registroAutomotor1 = new RegistroAutomotor_1.RegistroAutomotor("Registro Nº 1");
var registroAutomotor2 = new RegistroAutomotor_1.RegistroAutomotor("Registro Nº 3");
// Vehículos que pertenecen a un registro
registroAutomotor1.agregarVehiculo(vehiculo1);
registroAutomotor1.agregarVehiculo(vehiculo2);
registroAutomotor1.agregarVehiculo(vehiculo3);
registroAutomotor1.agregarVehiculo(vehiculo4);
registroAutomotor1.agregarVehiculo(vehiculo5);
/*
console.log(vehiculo1);
console.log(vehiculo2);
console.log(registroAutomotor1);
console.log(registroAutomotor2);
*/
// Ver lista de Vehículos del registro 1        --> map muestra en una línea lo q está en un arreglo
console.log("Vehículos del ", registroAutomotor1.getNombre(), ": ", registroAutomotor1.getListaVehiculos().map(function (vehiculo) { return vehiculo.getVehiculo(); }));
// Elimino un vehículo del registro
registroAutomotor1.bajaVehiculo(vehiculo2);
// Ver lista de Vehículos del registro 1        --> map muestra en una línea lo q está en un arreglo
console.log("Vehículos del ", registroAutomotor1.getNombre(), ": ", registroAutomotor1.getListaVehiculos().map(function (vehiculo) { return vehiculo.getVehiculo(); }));
// Modifico un vehículo del registro
