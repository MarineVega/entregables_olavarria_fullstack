import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    
    constructor (nombre: string, puntosDeVida: number) {
        super (nombre, puntosDeVida);
    }
    
    atacar(): void {
        console.log (`El Mago ${this.nombre} está atacando con magia básica`);
    }

    defender(): void {
        console.log(`El Mago ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Mago - Nombre: " + this.nombre + " - Vida: " + this.puntosDeVida + " - Nivel: " + this.nivel
    }
}

