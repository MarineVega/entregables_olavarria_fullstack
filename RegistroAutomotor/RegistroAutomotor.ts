import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    private nombre: string;
    private listaVehiculos: Vehiculo[];

    constructor (nombre: string) {
        this.nombre = nombre;
        this.listaVehiculos = [];
    }
    
    // getters
    getNombre(): string {
        return this.nombre;
    }

    getListaVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
    }

    // setters
    setNombre (nombre: string): void {
        if (nombre != undefined && nombre.length > 4) {
            this.nombre = nombre;
        }
    }
    
    /*
    agregarVehiculo(tipo: string, marca: string, modelo: string, anio:number, patente: string, titular: string ): void {
        let nuevoVehiculo: Vehiculo = new Vehiculo(tipo, marca, modelo, anio, patente, titular);
    }
    */

    agregarVehiculo (vehiculo: Vehiculo): void {     
        // chequeo que el vehículo ingresado no exista
        if (vehiculo!=undefined && this.listaVehiculos.indexOf(vehiculo)<0) {           // ver la 2º condición porqué da -1 cuando ya existe uno
            this.listaVehiculos.push(vehiculo);
        }        
    }

    modificarVehiculo (vehiculoModificar: Vehiculo, tipo?: string, marca?: string, modelo?: string, patente?: string, titular?: string, anio?:number): void {
        // chequeo que venga algo por parámetro vehículo y que esté en el listado
        if (vehiculoModificar!=undefined && this.listaVehiculos.indexOf(vehiculoModificar)>=0) { 

            const posicionVehiculo: number = this.listaVehiculos.indexOf(vehiculoModificar);

            // chequeo cada parámetro para saber cuál se modifica
            if (tipo!=undefined && tipo!=null) {
                this.listaVehiculos[posicionVehiculo].setTipo(tipo);
            }

            if (marca!=undefined && marca!=null) {
                this.listaVehiculos[posicionVehiculo].setMarca(marca);
            }

            if (modelo!=undefined && modelo!=null) {
                this.listaVehiculos[posicionVehiculo].setModelo(modelo);
            }
            
            if (patente!=undefined && patente!=null) {
                this.listaVehiculos[posicionVehiculo].setPatente(patente);                
            }
            
            if (titular!=undefined && titular!=null) {
                this.listaVehiculos[posicionVehiculo].setTitular(titular);
            }

            if (anio!=undefined && anio!=null) {
                this.listaVehiculos[posicionVehiculo].setAnio(anio);
            }
        }
    }

    bajaVehiculo (vehiculoEliminar: Vehiculo): void {
        // chequeo que venga algo por parámetro y chequeo que el vehículo esté en el listado
        if (vehiculoEliminar!=undefined && this.listaVehiculos.indexOf(vehiculoEliminar)>=0) {                 //this.listaVehiculos.includes(vehiculoEliminar
            //posición del vehículo a eliminar dentro del arreglo
            const posicionVehiculo: number = this.listaVehiculos.indexOf(vehiculoEliminar);
            this.listaVehiculos.splice(posicionVehiculo,1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    }
    
}