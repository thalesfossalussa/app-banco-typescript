import { Conta } from "./conta.js";

export class ContaCorrente extends Conta {
    public readonly numero:string;
    private _numero:string;
    private limite:number;

    public depositar(valor:number):void {
        throw new Error("Method not implemented.");
    }
    public sacar(valor:number):void {
        throw new Error("Method not implemented.");
    }

    public transferir(contaDestino:Conta, valor:number):void {

    }

    public calcularSaldo():number {
        return 1;
    }
}