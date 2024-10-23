import { Mago } from "./Mago";

export class MagoEvolucionado extends Mago {

    constructor (nombre: string, puntosDeVida: number) {
        super (nombre, puntosDeVida)
    }

    crearIlusion(): void {
        console.log (`${this.nombre} crea ilusión de tormenta eléctrica`)
    }

    restaurar(): void {
        console.log (`${this.nombre} restaura objetos destruidos`)
    }

}
