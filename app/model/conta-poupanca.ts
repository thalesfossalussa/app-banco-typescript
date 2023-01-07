import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Transacao } from "../interface/itransacao.js";
import { Debito } from "./debito.js";
import { Taxas } from "../enums/taxas.js";

export class ContaPoupanca extends Conta {
    readonly numero: string;
    private rentabilidadeMensal: number;
    private transacoes: Transacao[];

    public depositar(valor: number): void {
        const credito = new Credito(valor);
        this.transacoes.push(credito);
    }
    public sacar(valor: number): void {
        const debito = new Debito(valor);
        if(this.calcularSaldo() >= debito.valor){
            this.transacoes.push(debito);
        } else{
            console.log("Saldo inferior ao saque, favor verificar seu saldo e tentar novamente");
        }
    }

    public calcularRendimento(): number{
        let rendimento = 0;

        if (Taxas.SELIC <= 8.5) {
            rendimento = (Taxas.SELIC * 0.7) + Taxas.TR;
        } else if (Taxas.SELIC > 8.5) {
            rendimento = 0.005 + Taxas.TR;
        }
        return rendimento;
    }

    public calcularSaldo(): number {
        let totalCreditos = 0;
        let totalDebitos = 0;

        for (let i = 0; i < this.transacoes.length; i++) {
            // Calculando Creditos
            if (this.transacoes[i].constructor === Credito) {
                totalCreditos += this.transacoes[i].valor;
            }

            // Calculando Debitos
            if (this.transacoes[i].constructor === Debito) {
                totalDebitos += this.transacoes[i].valor;
            }
        }
        let saldoSemRendimento = totalCreditos - totalDebitos;
        return saldoSemRendimento + (saldoSemRendimento * this.calcularRendimento());
    }

}