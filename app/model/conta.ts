import { Cliente } from "./cliente.js";

export abstract class Conta {
    abstract numero: string;
    public cliente: Cliente;

    abstract depositar(valor: number): void;

    abstract sacar(valor: number): void
}