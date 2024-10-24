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
    Personaje.prototype.setHabilidad = function (habilidad) {
        this.habilidad = habilidad;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setAtaque = function (nuevoAtaque) {
        this.ataque = nuevoAtaque;
    };
    Personaje.prototype.getHabilidad = function () {
        return this.habilidad;
    };
    Personaje.prototype.mostrarAtaque = function () {
        return this.ataque.mostrarAtaque();
    };
    return Personaje;
}());
exports.Personaje = Personaje;
