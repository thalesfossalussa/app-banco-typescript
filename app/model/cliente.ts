import { IUsuario } from "../interface/iusuario.js";
import { Conta } from "./conta.js";
import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa implements IUsuario {
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _vip: boolean;
    public enderecos: Endereco[];
    public contas: Conta[];
    

    constructor(novoCPF: string, novoNome: string, novoTelefone: string) {
        super();
        this._cpf = novoCPF;
        this._nome = novoNome;
        this.telefone = novoTelefone;
    }
    
    
    public set telefone(novoTelefone: string) {
        this._telefone = novoTelefone;
    }  
    
    
    public get telefone(): string {
        return this._telefone;
    }
    
    autenticar(): boolean {
        return true;
    }

    public listarEnderecos() {
        for (let i = 0; i < this.enderecos.length; i++) {
            console.log(`
                Logradouro: ${this.enderecos[i].logradouro}
                Número: ${this.enderecos[i].numero}
                Complemento: ${this.enderecos[i].complemento}
                Cidade: ${this.enderecos[i].cidade}
                UF: ${this.enderecos[i].uf}
                CEP: ${this.enderecos[i].cep}
            `)
        }
    }
 
}