import { Ataque } from "./Ataque";
export abstract class Personaje {
    protected nombre: string;
    protected vida: number;
    protected nivel: number = 1;
    protected habilidad: string;
    
    protected ataque: Ataque;       // Composición


    constructor (nombre: string, vida: number, habilidad: string) {
        this.nombre = nombre;
        this.vida = vida;
        this.habilidad = habilidad;
    }
       
    abstract atacar (): void;
    abstract defender (): void;

    abstract mostrarDatos (): string;
    
    aumentarVida (cantidad: number): void {
        this.vida += cantidad;
    };
    
    disminuirVida (cantidad: number): void {
        this.vida -= cantidad;
    };
    
    subirNivel (nivel: number): void {
        this.nivel += nivel;
    };
    
    bajarNivel (nivel: number): void {
        this.nivel -= nivel;
    };
    
    setHabilidad(habilidad: string): void {
        this.habilidad = habilidad;
    }
    
    setNivel (nivel: number): void {
        this.nivel = nivel;
    }
    
    setAtaque (nuevoAtaque: Ataque): void {
        this.ataque = nuevoAtaque;
    }
    
    getHabilidad(): string {
        return this.habilidad;
    }

    mostrarAtaque (): string {
        return this.ataque.mostrarAtaque();
    }

}


