import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    //private magia: string = "Posión Mágica"
       
    constructor (nombre: string, vida: number, habilidad: string)
    {        
        super (nombre, vida, habilidad);        
    }
    
    atacar(): void {
        console.log (`El Mago ${this.nombre} está atacando con magia básica`);
    }

    defender(): void {
        console.log(`El Mago ${this.nombre} se está defendiendo`);
    }

    mostrarDatos(): string {
        return "Personaje: Mago - Nombre: " + this.nombre + " - Vida: " + this.vida + " - Nivel: " + this.nivel + " - Habilidad: " + this.habilidad
    }
}

