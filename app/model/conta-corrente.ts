import { Transacao } from "../interface/itransacao.js";
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

    public depositar(valor: number): void {
        const credito = new Credito(valor);
        this._transacoes.push(credito);
    }
    public sacar(valor:number): void {
        const debito = new Debito(valor);

        if(this.calcularSaldo() < debito.valor){
            console.log("Limite insuficiente, favor verificar seu saldo e limite e tentar novamente");
            return;
        }

        this._transacoes.push(debito);
    }

    public transferir(contaDestino: Conta, valor: number): void {

        if(this.calcularSaldo() < valor){
            console.log("Limite insuficiente, favor verificar seu saldo e limite e tentar novamente");
            return;
        }

        this.sacar(valor);
        contaDestino.depositar(valor);

    }

    public calcularSaldo(): number {
        let totalCreditos = 0;
        let totalDebitos = 0;

        for (let i = 0; i < this._transacoes.length; i++) {
            // Calculando Creditos
            if (this._transacoes[i].constructor === Credito) {
                totalCreditos += this._transacoes[i].valor;
            }
            
            // Calculando Debitos
            if (this._transacoes[i].constructor === Debito) {
                totalDebitos += this._transacoes[i].valor;
            }
        }

        return (totalCreditos - totalDebitos) + this._limite;
    }
}