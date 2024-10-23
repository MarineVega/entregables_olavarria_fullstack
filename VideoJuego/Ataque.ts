export class Ataque {
    private nombre: string = "Magia con Fuego";
    private arma: string = "Varita de Oro";
    private danio: number = 5 ;      // ej: 10 de daño, resta 1 vida del enemigo;
    // Si tiene 5 de daño, con solo 2 ataques, quita 1 vida del enemigo
    // Si tiene 1 de daño, son necesarios 10 ataques para quitar 1 vida del enemigo

    
    constructor (nombre: string, arma: string, danio: number)
    {
        this.nombre = nombre;
        this.arma = arma;
        this.danio = danio;
    }
    
/*
    MostrarAtaque(): string {
        return "Ataque " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio
    }
*/
    MostrarAtaque(): void {
        console.log("Ataque " + this.nombre + " Arma: " + this.arma + " - Daño: " + this.danio); 
}
}