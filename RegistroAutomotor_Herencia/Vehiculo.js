"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, patente, titular) {
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPatente(patente);
        this.setTitular(titular);
        if (anio == undefined)
            this.anio = -1;
        else
            this.setAnio(anio);
    }
    // getters
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
        return this.marca + " " + this.modelo + " Año " + this.anio + " Patente: " + this.patente;
    };
    // setters    
    Vehiculo.prototype.setMarca = function (marca) {
        if (marca != undefined && (marca == "Ford" || marca == "Chevrolet" || marca == "Fiat" || marca == "Volkswagen" || marca == "Toyota" || marca == "Scania" || marca == "Mercedes Benz" || marca == "Yamaha")) {
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
