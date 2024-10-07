"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, anio, patente, titular, tara, cantidadEjes, frontal) {
        var _this = _super.call(this, marca, modelo, anio, patente, titular) || this;
        _this.setTara(tara);
        _this.setCantidadEjes(cantidadEjes);
        _this.setFrontal(frontal);
        return _this;
    }
    Camion.prototype.setTara = function (tara) {
        if (tara != undefined && tara > 8 && tara <= 25) {
            this.tara = tara;
        }
    };
    Camion.prototype.setCantidadEjes = function (cantidadEjes) {
        if (cantidadEjes != undefined && cantidadEjes >= 2 && cantidadEjes <= 5) {
            this.cantidadEjes = cantidadEjes;
        }
    };
    Camion.prototype.setFrontal = function (frontal) {
        if (frontal != undefined) {
            this.frontal = frontal;
        }
    };
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    Camion.prototype.getCantidadEjes = function () {
        return this.cantidadEjes;
    };
    Camion.prototype.getFrontal = function () {
        return this.frontal;
    };
    return Camion;
}(Vehiculo_1.Vehiculo));
exports.Camion = Camion;
