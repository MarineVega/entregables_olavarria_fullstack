import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada: number;
    private frenoADisco: boolean;

    constructor (marca: string, modelo: string, anio: number, patente: string, titular: string, cilindrada: number, frenoADisco: boolean)
    {
        super(marca, modelo, anio, patente, titular);
        this.setCilindrada(cilindrada);
        this.setFrenoADisco(frenoADisco);
    }

    setCilindrada (cilindrada: number): void {
        if (cilindrada!=undefined && cilindrada>=50 && cilindrada<=1300) {
            this.cilindrada = cilindrada;
        }
    }

    setFrenoADisco (frenoADisco: boolean): void {
        if (frenoADisco!=undefined) {
            this.frenoADisco = frenoADisco;
        } else {
            this.frenoADisco = false;
        }
    }

    getCilindrada(): number {
        return this.cilindrada;
    }

    getFrenoADisco(): boolean {
        return this.frenoADisco;
    }

    getMoto(): string {
        return this.marca + " " + this.modelo + " Año " + this.anio + " Patente: " + this.patente + " Titular " + this.titular + " Cilindrada " + this.cilindrada + " Tiene Freno a Disco? " + this.frenoADisco;
    }
}