"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ataque = void 0;
var Ataque = /** @class */ (function () {
    // Si tiene 5 de daño, con solo 2 ataques, quita 1 vida del enemigo
    // Si tiene 1 de daño, son necesarios 10 ataques para quitar 1 vida del enemigo
    function Ataque(nombre, arma, danio) {
        this.nombre = nombre;
        this.arma = arma;
        this.danio = danio;
    }
    Ataque.prototype.mostrarAtaque = function () {
        return "Ataque " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio;
    };
    return Ataque;
}());
exports.Ataque = Ataque;
