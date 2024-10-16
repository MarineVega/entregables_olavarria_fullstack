"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nivel = 1;
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
    }
    Personaje.prototype.aumentarVida = function (cantidad) {
        this.puntosDeVida += cantidad;
    };
    ;
    Personaje.prototype.disminuirVida = function (cantidad) {
        this.puntosDeVida -= cantidad;
    };
    ;
    Personaje.prototype.subirNivel = function (nivel) {
        this.nivel += nivel;
    };
    ;
    Personaje.prototype.bajarNivel = function (nivel) {
        this.nivel -= nivel;
    };
    ;
    return Personaje;
}());
exports.Personaje = Personaje;
