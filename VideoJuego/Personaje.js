"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, habilidad) {
        this.nivel = 1;
        this.nombre = nombre;
        this.vida = vida;
        this.habilidad = habilidad;
    }
    //abstract getHabilidad (): string;
    //abstract setHabilidad (habilidad: string): void;
    Personaje.prototype.aumentarVida = function (cantidad) {
        this.vida += cantidad;
    };
    ;
    Personaje.prototype.disminuirVida = function (cantidad) {
        this.vida -= cantidad;
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
    Personaje.prototype.getHabilidad = function () {
        return this.habilidad;
    };
    Personaje.prototype.setHabilidad = function (habilidad) {
        this.habilidad = habilidad;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
