export class Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected anio: number;
    protected patente: string;
    protected titular: string;
    
    constructor (marca: string, modelo: string, anio: number, patente: string, titular: string) {
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPatente(patente);
        this.setTitular(titular);
        
        if (anio == undefined) 
            this.anio = -1;
        else
            this.setAnio(anio);
    }
    
    // getters
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }
    
    getAnio(): number {
        return this.anio;
    }
    
    getPatente(): string {
        return this.patente;
    }
    
    getTitular(): string {
        return this.titular;
    }

    getVehiculo(): string {
        return this.marca + " " + this.modelo + " Año " + this.anio + " Patente: " + this.patente;
    }

    // setters    
    setMarca (marca: string): void {
        if (marca!=undefined && (marca=="Ford" || marca=="Chevrolet" || marca=="Fiat" || marca=="Volkswagen" || marca=="Toyota" || marca=="Scania" || marca=="Mercedes Benz" || marca=="Yamaha")) {
            this.marca = marca;
        } else {
            this.marca = "N/D"
        }
    }

    setModelo (modelo: string): void {
        if (modelo!=undefined) {
            this.modelo = modelo;
        }
    }

    setAnio (anio: number): void {
        if (anio!=undefined && anio>=1930 && anio<2025) {
            this.anio = anio;
        }
    }

    setPatente (patente: string): void {
        if (patente!=undefined && patente.length>=6 && patente.length<=7) {
            this.patente = patente;
        }
    }

    setTitular (titular: string): void {
        if (titular!=undefined) {
            this.titular = titular;
        }
    }
}
