import { Funcionario } from "./funcionario.js";

export class Cargo {
    private readonly _nome: string;
    private _funcionarios: Funcionario[];

    constructor (novoNome: string, novoFuncionario: Funcionario) {
        this._nome = novoNome;
        this._funcionarios = [];
        this._funcionarios.push(novoFuncionario);
    }

    public get nome() {
        return this._nome;
    }

    public get funcionarios() {
        return this._funcionarios;
    }

    public adicionarFuncionario(novoFuncionario: Funcionario): void {
        this._funcionarios.push(novoFuncionario);
    }

    public removerFuncionario(antigoFuncionario: Funcionario): void{
        for(let i = 0; i < this._funcionarios.length; i++) {
            if (antigoFuncionario.cpf == this._funcionarios[i].cpf) {
                this._funcionarios = this._funcionarios.splice(i,1);
                break;
            }
        }
    }
}