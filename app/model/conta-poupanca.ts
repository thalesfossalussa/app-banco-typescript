import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Transacao } from "./transacao";
import { Debito } from "./debito.js";
import { Taxas } from "../enums/taxas.js";
import { Cliente } from "./cliente.js";

export class ContaPoupanca extends Conta {
    private _rentabilidadeMensal: number;
    private _transacoes: Transacao[] = [];

    constructor (numero: string, rentabilidadeMensal: number, cliente: Cliente) {
        super(numero, cliente);
        this._rentabilidadeMensal = rentabilidadeMensal;

    }

    public depositar(valor: number, data?: Date): void {
        const credito = new Credito(valor, data);
        this._transacoes.push(credito);
    }
    public sacar(valor: number, data?: Date): void {
        const debito = new Debito(valor, data);
        if(this.calcularSaldo() >= debito.valor){
            this._transacoes.push(debito);
        } else{
            console.log("Saldo inferior ao saque, favor verificar seu saldo e tentar novamente");
        }
    }

    public calcularRendimento(): number{
        let rendimento = 0;

        if (Taxas.SELIC <= 8.5) {
            rendimento = (Taxas.SELIC * 0.7) + Taxas.TR + this._rentabilidadeMensal;
        } else if (Taxas.SELIC > 8.5) {
            rendimento = 0.005 + Taxas.TR + this._rentabilidadeMensal;
        }
        return this.calcularSaldo() * rendimento;
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
        let saldo = totalCreditos - totalDebitos;
        return saldo;
    }

}