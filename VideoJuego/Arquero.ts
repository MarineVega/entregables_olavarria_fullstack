import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    
    constructor (nombre: string, puntosDeVida: number) 
    {
        super(nombre, puntosDeVida);
    }
    
    atacar(): void {
        console.log (`El Arquero ${this.nombre} está atacando`);
    }

    defender(): void {
        console.log(`El Arquero ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Arquero - Nombre: " + this.nombre + " - Vida: " + this.puntosDeVida + " - Nivel: " + this.nivel
    }

}