import { IUsuario } from "../interface/iusuario.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa implements IUsuario {
    protected readonly _cpf:string;
    protected readonly _nome:string;
    protected _telefone:string;
    private _vip:boolean;
    

    constructor(novoCPF:string, novoNome:string, novoTelefone:string) {
        super();
        this._cpf = novoCPF;
        this._nome = novoNome;
        this.telefone = novoTelefone;
    }
    
    
    public set telefone(novoTelefone:string) {
        this._telefone = novoTelefone;
    }  
    
    
    public get telefone():string {
        return this._telefone;
    }
    
    autenticar(): boolean {
        return true;
    }
 
}