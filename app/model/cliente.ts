import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa {
    public readonly cpf:string;
    public readonly nome:string;
    private _telefone:string;
    private _vip:boolean;
    

    constructor(novoCPF:string, novoNome:string, novoTelefone:string) {
        super();
        this.cpf = novoCPF;
        this.nome = novoNome;
        this.telefone = novoTelefone;
    }

    
    public set telefone(novoTelefone:string) {
        this._telefone = novoTelefone;
    }  

    
    public get telefone():string {
        return this._telefone;
    }
    
 
}