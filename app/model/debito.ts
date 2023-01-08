import { Transacao } from "../interface/itransacao.js";

export class Debito implements Transacao {
    valor: number;
    data: Date;

    constructor(valor: number, data?: Date) {
        this.valor = valor;
        if (data) {
            this.data = data;
        } else {
            this.data = new Date;
        }
    }
}