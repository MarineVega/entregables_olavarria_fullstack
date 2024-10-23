import { Mago } from "./Mago";

export class MagoEvolucionado extends Mago {

    constructor (nombre: string, vida: number, habilidad: string) {
        super (nombre, vida, habilidad)
        this.setNivel(15);
    }

    crearIlusion(): void {
        console.log (`${this.nombre} crea ilusión de tormenta eléctrica`)
    }

    restaurar(): void {
        console.log (`${this.nombre} restaura objetos destruidos`)
    }

}
