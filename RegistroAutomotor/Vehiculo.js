"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, marca, modelo, patente, titular, anio) {
        this.setTipo(tipo);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPatente(patente);
        this.setTitular(titular);
        /*
        this.tipo = tipo;
        this.marca = marca;
        this.titular = titular;
        this.modelo = modelo;
        this.patente = patente;
        */
        if (anio == undefined)
            this.anio = -1;
        else
            this.setAnio(anio);
        //this.anio = anio;
    }
    // si no indico el modificador de acceso, por default es public
    // getters
    Vehiculo.prototype.getTipo = function () {
        return this.tipo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getTitular = function () {
        return this.titular;
    };
    Vehiculo.prototype.getVehiculo = function () {
        return this.tipo + " " + this.marca + " " + this.modelo + " Año " + this.anio + " Patente: " + this.patente;
    };
    // setters
    Vehiculo.prototype.setTipo = function (tipo) {
        if (tipo != undefined && (tipo == "Auto" || tipo == "Moto" || tipo == "Camión")) {
            this.tipo = tipo;
        }
    };
    Vehiculo.prototype.setMarca = function (marca) {
        if (marca != undefined && (marca == "Ford" || marca == "Chevrolet" || marca == "Fiat" || marca == "Volkswagen" || marca == "Toyota" || marca == "Scania" || marca == "Yamaha")) {
            this.marca = marca;
        }
        else {
            this.marca = "N/D";
        }
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        if (modelo != undefined) {
            this.modelo = modelo;
        }
    };
    Vehiculo.prototype.setAnio = function (anio) {
        if (anio != undefined && anio >= 1930 && anio < 2025) {
            this.anio = anio;
        }
    };
    Vehiculo.prototype.setPatente = function (patente) {
        if (patente != undefined && patente.length >= 6 && patente.length <= 7) {
            this.patente = patente;
        }
    };
    Vehiculo.prototype.setTitular = function (titular) {
        if (titular != undefined) {
            this.titular = titular;
        }
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
