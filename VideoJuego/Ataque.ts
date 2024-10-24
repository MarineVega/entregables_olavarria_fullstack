export class Ataque {
    private nombre: string;
    private arma: string;
    private danio: number;      // ej: 10 de daño, resta 1 vida del enemigo;
    // Si tiene 5 de daño, con solo 2 ataques, quita 1 vida del enemigo
    // Si tiene 1 de daño, son necesarios 10 ataques para quitar 1 vida del enemigo
    
    constructor (nombre: string, arma: string, danio: number)
    {
        this.nombre = nombre;
        this.arma = arma;
        this.danio = danio;
    }
    
    mostrarAtaque(): string {
        return "Ataque: " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio; 
    }
}