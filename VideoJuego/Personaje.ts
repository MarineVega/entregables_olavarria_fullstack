export abstract class Personaje {
    protected nombre: string;
    protected puntosDeVida: number;
    protected nivel: number = 1;

    constructor (nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
    }
       
    abstract atacar (): void;
    abstract defender (): void;

    abstract mostrarDatos (): string;

    aumentarVida (cantidad: number): void {
        this.puntosDeVida += cantidad;
    };
    
    disminuirVida (cantidad: number): void {
        this.puntosDeVida -= cantidad;
    };
    
    subirNivel (nivel: number): void {
        this.nivel += nivel;
    };
    
    bajarNivel (nivel: number): void {
        this.nivel -= nivel;
    };  
}


