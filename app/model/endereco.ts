import { Cliente } from "./cliente.js";

export class Endereco {
    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string;
    private _cidade: string;
    private _uf: string;
    private readonly _cliente: Cliente;

    constructor(cliente: Cliente, cep:string, logradouro:string, numero:string, complemento:string, cidade:string, uf:string){
        this._cliente = cliente;
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    public get cliente(): Cliente{
        return this._cliente;
    }
    
    public get cep(): string {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public get numero(): string {
        return this._numero;
    }

    public get complemento(): string {
        return this._complemento;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public get uf(): string {
        return this._uf;
    }

    public set cep(novoDado: string) {
        this._cep = novoDado;
    }
    
    public set logradouro(novoDado: string) {
        this._logradouro = novoDado;
    }
    
    public set numero(novoDado: string) {
        this._numero = novoDado;
    }
    
    public set complemento(novoDado: string) {
        this._complemento = novoDado;
    }
    
    public set cidade(novoDado: string) {
        this._cidade = novoDado;
    }
    
    public set uf(novoDado: string) {
        this._uf = novoDado;
    }
    
    
}