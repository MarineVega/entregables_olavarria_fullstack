import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    
    constructor (nombre: string, vida: number, habilidad: string) {
        super (nombre, vida, habilidad);
    }
        
    atacar(): void {
        console.log (`El Arquero ${this.nombre} está atacando`);
    }

    defender(): void {
        console.log(`El Arquero ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Arquero - Nombre: " + this.nombre + " - Vida: " + this.vida + " - Nivel: " + this.nivel + " - Habilidad: " + this.habilidad
    }

}