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
exports.MagoEvolucionado = void 0;
var Mago_1 = require("./Mago");
var MagoEvolucionado = /** @class */ (function (_super) {
    __extends(MagoEvolucionado, _super);
    function MagoEvolucionado(nombre, puntosDeVida) {
        return _super.call(this, nombre, puntosDeVida) || this;
    }
    MagoEvolucionado.prototype.crearIlusion = function () {
        console.log("".concat(this.nombre, " crea ilusi\u00F3n de tormenta el\u00E9ctrica"));
    };
    MagoEvolucionado.prototype.restaurar = function () {
        console.log("".concat(this.nombre, " restaura objetos destruidos"));
    };
    return MagoEvolucionado;
}(Mago_1.Mago));
exports.MagoEvolucionado = MagoEvolucionado;
