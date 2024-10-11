"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var Camion_1 = require("./Camion");
var Moto_1 = require("./Moto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.setNombre(nombre);
        this.listaCamiones = [];
        this.listaMotos = [];
    }
    // getters
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getListaCamiones = function () {
        return this.listaCamiones;
    };
    RegistroAutomotor.prototype.getListaMotos = function () {
        return this.listaMotos;
    };
    /*
        getMoto(): string {
            return this.getMoto();
        }
    */
    // setters
    RegistroAutomotor.prototype.setNombre = function (nombre) {
        if (nombre != undefined && nombre.length > 4) {
            this.nombre = nombre;
        }
    };
    RegistroAutomotor.prototype.agregarCamion = function (marca, modelo, anio, patente, titular, tara, cantidadEjes, frontal) {
        var camion = new Camion_1.Camion(marca, modelo, anio, patente, titular, tara, cantidadEjes, frontal);
        this.listaCamiones.push(camion);
    };
    RegistroAutomotor.prototype.agregarMoto = function (marca, modelo, anio, patente, titular, cilindrada, frenoADisco) {
        var moto = new Moto_1.Moto(marca, modelo, anio, patente, titular, cilindrada, frenoADisco);
        this.listaMotos.push(moto);
    };
    RegistroAutomotor.prototype.mostrarVehículo = function (vehiculo) {
        console.log("Marca: " + vehiculo.getMarca());
        console.log("Modelo: " + vehiculo.getModelo());
        console.log("Patente: " + vehiculo.getPatente());
        console.log("Titular: " + vehiculo.getTitular());
    };
    RegistroAutomotor.prototype.buscarVehiculo = function (patente) {
        var listaVehiculos = __spreadArray(__spreadArray([], this.listaCamiones, true), this.listaMotos, true);
        for (var i = 0; i < listaVehiculos.length; i++) {
            if (listaVehiculos[i].getPatente() === patente) {
                console.log("Se encontró el vehículo");
                this.mostrarVehículo(listaVehiculos[i]);
                return listaVehiculos[i];
            }
        }
        console.log("No se encontró el vehículo con la patente " + patente);
        return null;
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (vehiculoEliminar) {
        var listaVehiculos = __spreadArray(__spreadArray([], this.listaCamiones, true), this.listaMotos, true);
        // chequeo que venga algo por parámetro y chequeo que esté en el listado
        if (vehiculoEliminar != undefined && listaVehiculos.indexOf(vehiculoEliminar) >= 0) {
            var posicionVehiculo = listaVehiculos.indexOf(vehiculoEliminar);
            console.log("Posicion vehiculo: ".concat(posicionVehiculo));
            listaVehiculos.splice(posicionVehiculo, 1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
