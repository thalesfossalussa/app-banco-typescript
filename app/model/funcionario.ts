import { IUsuario } from "../interface/iusuario.js";
import { Cargo } from "./cargo.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa implements IUsuario{
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _salario: number;
    public cargos: Cargo[];

    autenticar(): boolean {
        return true;
    }
}