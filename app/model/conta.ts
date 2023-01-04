export abstract class Conta {
    abstract numero:string;

    abstract depositar(valor:number):void;

    abstract sacar(valor:number):void
}