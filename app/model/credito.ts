import { Transacao } from "./transacao.js";

export class Credito extends Transacao {

    constructor(valor: number, data?: Date) {
        if (valor < 0) {
            valor = valor * -1;
        }
        super(valor, data);
    }
}