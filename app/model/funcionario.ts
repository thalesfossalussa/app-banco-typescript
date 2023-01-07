import { IUsuario } from "../interface/iusuario.js";
import { Cargo } from "./cargo.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa implements IUsuario{
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _salario: number;
    private _cargos: Cargo[] = [];

    constructor(cpfFuncionario: string, nomeFuncionario: string, telefoneFuncionario: string, salarioFuncionario: number) {
        super();
        this._cpf = cpfFuncionario;
        this._nome = nomeFuncionario;
        this._telefone = telefoneFuncionario;
        this._salario = salarioFuncionario;
    }

    autenticar(): boolean {
        return true;
    }

    public get cpf() {
        return this._cpf;
    }

    public get nome() {
        return this._nome;
    }

    public get telefone() {
        return this._telefone;
    }


    public get salario() {
        return this._salario;
    }

    public get cargos() {
        return  this._cargos;
    }

    public set telefone(novo: string) {
        this._telefone = novo;
    }

    public set salario(novo: number) {
        this._salario = novo;
    }

    public set cargo(novo: Cargo) {
        this._cargos.push(novo);
    }
}