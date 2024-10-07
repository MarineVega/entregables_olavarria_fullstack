"use strict";
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
    RegistroAutomotor.prototype.modificarMoto = function (motoAnterior, motoModificada) {
        // chequeo que venga algo por parámetro y que esté en el listado
        if (motoAnterior != undefined && motoModificada != undefined && this.listaMotos.indexOf(motoAnterior) >= 0) {
            var posicionMoto = this.listaMotos.indexOf(motoAnterior);
            this.listaMotos[posicionMoto] = motoModificada;
        }
    };
    RegistroAutomotor.prototype.eliminarMoto = function (motoEliminar) {
        // chequeo que venga algo por parámetro y chequeo que esté en el listado
        if (motoEliminar != undefined && this.listaMotos.indexOf(motoEliminar) >= 0) {
            var posicionMoto = this.listaMotos.indexOf(motoEliminar);
            this.listaMotos.splice(posicionMoto, 1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
