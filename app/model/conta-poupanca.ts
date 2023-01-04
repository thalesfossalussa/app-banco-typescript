import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {
    readonly numero:string;
    private rentabilidadeMensal:number;

    public depositar(valor:number):void {
        throw new Error("Method not implemented.");
    }
    public sacar(valor:number):void {
        throw new Error("Method not implemented.");
    }

    public calcularRendimento():number{
        return 1;
    }

    public calcularSaldo():number {
        return 1;
    }

}