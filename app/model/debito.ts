import { Transacao } from "./transacao.js";

export class Debito extends Transacao {

    constructor(valor: number, data?: Date) {
        if(valor > 0) {
            valor = valor * -1;
        }
        super(valor, data);
    }
}