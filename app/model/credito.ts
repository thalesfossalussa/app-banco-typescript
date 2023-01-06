import { Transacao } from "../interface/itransacao.js";

export class Credito implements Transacao {
    valor: number;
    data: Date;

    constructor(valor: number) {
        this.valor = valor;
        this.data = new Date;
    }
}