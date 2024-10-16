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
exports.Luchador = void 0;
var Personaje_1 = require("./Personaje");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nombre, puntosDeVida) {
        return _super.call(this, nombre, puntosDeVida) || this;
    }
    Luchador.prototype.atacar = function () {
        console.log("El Luchador ".concat(this.nombre, " est\u00E1 atacando"));
    };
    Luchador.prototype.defender = function () {
        console.log("El Luchador ".concat(this.nombre, " se est\u00E1 defendiendo"));
    };
    Luchador.prototype.mostrarDatos = function () {
        return "Personaje: Luchador - Nombre: " + this.nombre + " - Vida: " + this.puntosDeVida + " - Nivel: " + this.nivel;
    };
    return Luchador;
}(Personaje_1.Personaje));
exports.Luchador = Luchador;
