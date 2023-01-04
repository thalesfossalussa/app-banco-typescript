import { IUsuario } from "../interface/iusuario.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa implements IUsuario{
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _salario: number;

    autenticar(): boolean {
        return true;
    }
}