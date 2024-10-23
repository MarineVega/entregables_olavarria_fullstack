"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ataque = void 0;
var Ataque = /** @class */ (function () {
    // Si tiene 5 de daño, con solo 2 ataques, quita 1 vida del enemigo
    // Si tiene 1 de daño, son necesarios 10 ataques para quitar 1 vida del enemigo
    function Ataque(nombre, arma, danio) {
        this.nombre = "Magia con Fuego";
        this.arma = "Varita de Oro";
        this.danio = 5; // ej: 10 de daño, resta 1 vida del enemigo;
        this.nombre = nombre;
        this.arma = arma;
        this.danio = danio;
    }
    /*
        MostrarAtaque(): string {
            return "Ataque " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio
        }
    */
    Ataque.prototype.MostrarAtaque = function () {
        console.log("Ataque " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio);
    };
    return Ataque;
}());
exports.Ataque = Ataque;
