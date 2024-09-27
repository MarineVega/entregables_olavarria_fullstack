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
        // ... se llama spread, se usa para copiar todo un arreglo
        // Para no romper el encapsulamiento, lo mejor es crear una copia del arreglo y su contenido   
        //const copiaListaVehiculos: Vehiculo[] = this.listaVehiculos.map(vehi => ({...vehi}) as Vehiculo);
        
        //return copiaListaVehiculos;

        return this.listaVehiculos;
    }

    // setters
    setNombre (nombre: string): void {
        if (nombre != undefined && nombre.length > 4) {
            this.nombre = nombre;
        }
    }
    /*
    setListaVehiculos (listaVehiculos: Vehiculo[]): void {
        this.listaVehiculos = listaVehiculos;
    }
    */
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

    modificarVehiculo () {
        

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