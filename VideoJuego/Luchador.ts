import { Personaje } from "./Personaje";

export class Luchador extends Personaje {

    constructor (nombre: string, vida: number, habilidad: string)
    {   
        super (nombre, vida, habilidad); 
    }

    atacar(): void {
        console.log (`El Luchador ${this.nombre} está atacando`);
    }

    defender(): void {
        console.log(`El Luchador ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Luchador - Nombre: " + this.nombre + " - Vida: " + this.vida + " - Nivel: " + this.nivel + " - Habilidad: " + this.habilidad
    }
    
}