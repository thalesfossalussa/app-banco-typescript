import { Cliente } from "./cliente.js";

export abstract class Conta {
    private _numero: string;
    private _cliente: Cliente;

    constructor(numero: string, cliente: Cliente) {
        this._numero = numero;
        this._cliente = cliente;
    }

    abstract depositar(valor: number, data?: Date): void;

    abstract sacar(valor: number, data?: Date): void;
}