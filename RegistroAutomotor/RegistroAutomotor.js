"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(nombre) {
        this.nombre = nombre;
        this.listaVehiculos = [];
    }
    // getters
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getListaVehiculos = function () {
        return this.listaVehiculos;
    };
    // setters
    RegistroAutomotor.prototype.setNombre = function (nombre) {
        if (nombre != undefined && nombre.length > 4) {
            this.nombre = nombre;
        }
    };
    /*
    agregarVehiculo(tipo: string, marca: string, modelo: string, anio:number, patente: string, titular: string ): void {
        let nuevoVehiculo: Vehiculo = new Vehiculo(tipo, marca, modelo, anio, patente, titular);
    }
    */
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        // chequeo que el vehículo ingresado no exista
        if (vehiculo != undefined && this.listaVehiculos.indexOf(vehiculo) < 0) { // ver la 2º condición porqué da -1 cuando ya existe uno
            this.listaVehiculos.push(vehiculo);
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (vehiculoModificar, tipo, marca, modelo, patente, titular, anio) {
        // chequeo que venga algo por parámetro vehículo y que esté en el listado
        if (vehiculoModificar != undefined && this.listaVehiculos.indexOf(vehiculoModificar) >= 0) {
            var posicionVehiculo = this.listaVehiculos.indexOf(vehiculoModificar);
            // chequeo cada parámetro para saber cuál se modifica
            if (tipo != undefined && tipo != null) {
                this.listaVehiculos[posicionVehiculo].setTipo(tipo);
            }
            if (marca != undefined && marca != null) {
                this.listaVehiculos[posicionVehiculo].setMarca(marca);
            }
            if (modelo != undefined && modelo != null) {
                this.listaVehiculos[posicionVehiculo].setModelo(modelo);
            }
            if (patente != undefined && patente != null) {
                this.listaVehiculos[posicionVehiculo].setPatente(patente);
            }
            if (titular != undefined && titular != null) {
                this.listaVehiculos[posicionVehiculo].setTitular(titular);
            }
            if (anio != undefined && anio != null) {
                this.listaVehiculos[posicionVehiculo].setAnio(anio);
            }
        }
    };
    RegistroAutomotor.prototype.bajaVehiculo = function (vehiculoEliminar) {
        // chequeo que venga algo por parámetro y chequeo que el vehículo esté en el listado
        if (vehiculoEliminar != undefined && this.listaVehiculos.indexOf(vehiculoEliminar) >= 0) { //this.listaVehiculos.includes(vehiculoEliminar
            //posición del vehículo a eliminar dentro del arreglo
            var posicionVehiculo = this.listaVehiculos.indexOf(vehiculoEliminar);
            this.listaVehiculos.splice(posicionVehiculo, 1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
