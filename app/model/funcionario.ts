import { IUsuario } from "../interface/iusuario.js";
import { Cargo } from "./cargo.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa implements IUsuario{
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _salario: number;
    private _cargos: Cargo[] = [];

    constructor(cpf: string, nome: string, telefone: string, salario: number) {
        super();
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
        this._salario = salario;
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

    public set telefone(telefone: string) {
        this._telefone = telefone;
    }

    public set salario(salario: number) {
        this._salario = salario;
    }

    public set cargo(cargo: Cargo) {
        this._cargos.push(cargo);
    }
}