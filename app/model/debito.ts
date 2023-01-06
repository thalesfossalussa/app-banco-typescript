import { Transacao } from "../interface/itransacao.js";

export class Debito implements Transacao {
    valor: number;
    data: Date;

    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date;
    }
}