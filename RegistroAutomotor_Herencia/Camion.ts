import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private tara: number;
    private cantidadEjes: number;
    private frontal: boolean;

    constructor (marca: string, modelo: string, anio: number, patente: string, titular: string, tara: number, cantidadEjes: number, frontal: boolean)
    {
        super(marca, modelo, anio, patente, titular);
        this.setTara(tara);
        this.setCantidadEjes(cantidadEjes);
        this.setFrontal(frontal);
    }

    setTara (tara: number): void {
        if (tara!=undefined && tara >8 && tara <=25) {
            this.tara = tara;
        }
    }

    setCantidadEjes (cantidadEjes: number): void {
        if (cantidadEjes!=undefined && cantidadEjes >=2 && cantidadEjes <=5) {
            this.cantidadEjes = cantidadEjes;
        }
    }

    setFrontal (frontal: boolean): void {
        if (frontal!=undefined) {
            this.frontal = frontal;
        }
    }

    getTara(): number {
        return this.tara;
    }

    getCantidadEjes(): number {
        return this.cantidadEjes;
    }

    getFrontal(): boolean {
        return this.frontal;
    }
}
