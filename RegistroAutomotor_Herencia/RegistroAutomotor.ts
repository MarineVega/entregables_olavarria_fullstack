import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    private nombre: string;
    private listaCamiones: Camion[];
    private listaMotos: Moto[];

    constructor (nombre: string) {
        this.setNombre(nombre);
        this.listaCamiones = [];
        this.listaMotos = []
    }
    
    // getters
    getNombre(): string {
        return this.nombre;
    }

    getListaCamiones(): Camion[] {
        return this.listaCamiones;
    }

    getListaMotos(): Moto[] {
        return this.listaMotos;       
    }

    // setters
    setNombre (nombre: string): void {
        if (nombre != undefined && nombre.length > 4) {
            this.nombre = nombre;
        }
    }

    agregarCamion (marca: string, modelo: string, anio: number, patente: string, titular: string, tara: number, cantidadEjes: number, frontal: boolean): void {
        const camion: Camion = new Camion(marca,modelo,anio,patente,titular,tara,cantidadEjes,frontal);
        this.listaCamiones.push(camion);
    }

    agregarMoto (marca: string, modelo: string, anio: number, patente: string, titular: string, cilindrada: number, frenoADisco: boolean): void {
        const moto: Moto = new Moto(marca,modelo,anio,patente,titular,cilindrada,frenoADisco);
        this.listaMotos.push(moto);
    }   
    
    private mostrarVehículo(vehiculo: Vehiculo): void {
        console.log("Marca: " + vehiculo.getMarca());
        console.log("Modelo: " + vehiculo.getModelo());
        console.log("Patente: " + vehiculo.getPatente());
        console.log("Titular: " + vehiculo.getTitular());
    }

    buscarVehiculo(patente: string): Vehiculo|null {
        let listaVehiculos: Vehiculo[] = [...this.listaCamiones,...this.listaMotos];
        for (let i=0; i < listaVehiculos.length;i++) {
            if (listaVehiculos[i].getPatente() === patente) {
                console.log ("Se encontró el vehículo");
                this.mostrarVehículo(listaVehiculos[i]);
                return listaVehiculos[i];
            }
        }
        console.log("No se encontró el vehículo con la patente " + patente);
        return null;
    }

    eliminarVehiculo (vehiculoEliminar: Vehiculo): void {
        let listaVehiculos: Vehiculo[] = [...this.listaCamiones,...this.listaMotos];

        // chequeo que venga algo por parámetro y chequeo que esté en el listado
        if (vehiculoEliminar!=undefined && listaVehiculos.indexOf(vehiculoEliminar)>=0) { 
            const posicionVehiculo: number = listaVehiculos.indexOf(vehiculoEliminar);

            console.log(`Posicion vehiculo: ${posicionVehiculo}` )
            listaVehiculos.splice(posicionVehiculo,1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    }


/*
    modificarMoto (motoAnterior: Moto, motoModificada: Moto): void {
        // chequeo que venga algo por parámetro y que esté en el listado
        if (motoAnterior!=undefined && motoModificada!=undefined && this.listaMotos.indexOf(motoAnterior)>=0) { 
            const posicionMoto: number = this.listaMotos.indexOf(motoAnterior);
            this.listaMotos[posicionMoto] = motoModificada;            
        }
    }

  */
}