import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa{
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _salario: number;
}