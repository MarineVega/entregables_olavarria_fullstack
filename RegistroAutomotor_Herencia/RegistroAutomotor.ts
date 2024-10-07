import { Camion } from "./Camion";
import { Moto } from "./Moto";

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

    modificarMoto (motoAnterior: Moto, motoModificada: Moto): void {
        // chequeo que venga algo por parámetro y que esté en el listado
        if (motoAnterior!=undefined && motoModificada!=undefined && this.listaMotos.indexOf(motoAnterior)>=0) { 
            const posicionMoto: number = this.listaMotos.indexOf(motoAnterior);
            this.listaMotos[posicionMoto] = motoModificada;            
        }
    }

    eliminarMoto (motoEliminar: Moto): void {
        // chequeo que venga algo por parámetro y chequeo que esté en el listado
        if (motoEliminar!=undefined && this.listaMotos.indexOf(motoEliminar)>=0) { 
            const posicionMoto: number = this.listaMotos.indexOf(motoEliminar);
            this.listaMotos.splice(posicionMoto,1); // 1 indica que voy a eliminar sólo 1 elemento, ese elemento
        }
    }
  
}