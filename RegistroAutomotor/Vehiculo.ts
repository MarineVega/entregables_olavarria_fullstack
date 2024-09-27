export class Vehiculo {
    private tipo: string;   // Auto - Moto - Camión
    private marca: string;
    private modelo: string;
    private anio: number;
    private patente: string;
    private titular: string;
    
    constructor (tipo: string, marca: string, modelo: string, patente: string, titular: string, anio?: number) {
        this.setTipo(tipo);
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setPatente(patente);
        this.setTitular(titular);
        
        /*
        this.tipo = tipo;
        this.marca = marca;
        this.titular = titular;
        this.modelo = modelo;
        this.patente = patente;
        */

        if (anio == undefined) 
            this.anio = -1;
        else
            this.setAnio(anio);
            //this.anio = anio;
    }
    
    // si no indico el modificador de acceso, por default es public

    // getters
    getTipo(): string {
        return this.tipo;
    }

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
        return this.tipo + " " + this.marca + " " + this.modelo + " Año " + this.anio + " Patente: " + this.patente;
    }

    // setters
    setTipo (tipo: string): void {
        if (tipo!=undefined && (tipo=="Auto" || tipo=="Moto" || tipo=="Camión")) {
            this.tipo = tipo;
        }
    }

    setMarca (marca: string): void {
        if (marca!=undefined && (marca=="Ford" || marca=="Chevrolet" || marca=="Fiat" || marca=="Volkswagen" || marca=="Toyota" || marca=="Scania" || marca=="Yamaha")) {
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
