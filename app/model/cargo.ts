import { Funcionario } from "./funcionario.js";

export class Cargo {
    private readonly _nome: string;
    private _funcionarios: Funcionario[];

    constructor (nome: string, funcionario: Funcionario) {
        this._nome = nome;
        this._funcionarios = [];
        this._funcionarios.push(funcionario);
    }

    public get nome() {
        return this._nome;
    }

    public get funcionarios() {
        return this._funcionarios;
    }

    public adicionarFuncionario(funcionario: Funcionario): void {
        this._funcionarios.push(funcionario);
    }

    public removerFuncionario(funcionario: Funcionario): void{
        for(let i = 0; i < this._funcionarios.length; i++) {
            if (funcionario.cpf == this._funcionarios[i].cpf) {
                this._funcionarios = this._funcionarios.splice(i,1);
                break;
            }
        }
    }
}