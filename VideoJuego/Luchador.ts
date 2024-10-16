import { Personaje } from "./Personaje";

export class Luchador extends Personaje {

    constructor (nombre: string, puntosDeVida: number)
    {   
        super(nombre, puntosDeVida)
    }

    atacar(): void {
        console.log (`El Luchador ${this.nombre} está atacando`);
    }

    defender(): void {
        console.log(`El Luchador ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Luchador - Nombre: " + this.nombre + " - Vida: " + this.puntosDeVida + " - Nivel: " + this.nivel
    }
    
}