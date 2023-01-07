import { IUsuario } from "../interface/iusuario.js";
import { Conta } from "./conta.js";
import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa implements IUsuario {
    protected readonly _cpf: string;
    protected readonly _nome: string;
    protected _telefone: string;
    private _vip: boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];
    

    constructor(cpf: string, nome: string, telefone: string) {
        super();
        this._cpf = cpf;
        this._nome = nome;
        this.telefone = telefone;
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
    
    public get cpf(): string {
        return this._cpf;
    }

    public get telefone(): string {
        return this._telefone;
    }
    
    public get nome(): string {
        return this._nome;
    }
    
    public get vip(): boolean {
        return this._vip;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }

    public get contas(): Conta[] {
        return this._contas;
    }

    public set telefone(telefone: string) {
        this._telefone = telefone;
    }  

    public set vip(vip: boolean) {
        this._vip = vip;
    }  

    public set endereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }  

    public set conta(conta: Conta) {
        this._contas.push(conta);
    }  
    
}