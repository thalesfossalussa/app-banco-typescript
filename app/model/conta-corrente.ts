import { Transacao } from "./transacao.js";
import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

export class ContaCorrente extends Conta {
    private _limite:number;
    private _transacoes: Transacao[] = [];

    constructor (numero: string, limite: number, cliente: Cliente) {
        super(numero, cliente);
        this._limite = limite;
    }

    public depositar(valor: number, data?: Date): void {
        const credito = new Credito(valor, data);
        this._transacoes.push(credito);
    }
    public sacar(valor:number, data?: Date): void {
        const debito = new Debito(valor, data);

        if(this.calcularSaldo() >= debito.valor){
            this._transacoes.push(debito);
        }

    }

    public transferir(contaDestino: Conta, valor: number): void {
        if(this.calcularSaldo() >= valor){
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }

    public calcularSaldo(): number {
        let saldo = 0;

        for (let i = 0; i < this._transacoes.length; i++) {
            saldo += this._transacoes[i].valor;
            // // Calculando Creditos
            // if (this._transacoes[i].constructor === Credito) {
            //     totalCreditos += this._transacoes[i].valor;
            // }
            
            // // Calculando Debitos
            // if (this._transacoes[i].constructor === Debito) {
            //     totalDebitos += this._transacoes[i].valor;
            // }
        }

        return saldo + this._limite;
    }
}