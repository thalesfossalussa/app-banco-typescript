import { Transacao } from "../interface/itransacao.js";
import { Conta } from "./conta.js";
import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

export class ContaCorrente extends Conta {
    public readonly numero:string;
    private _numero:string;
    private limite:number;
    private transacoes: Transacao[];

    public depositar(valor: number): void {
        const credito = new Credito(valor);
        this.transacoes.push(credito);
    }
    public sacar(valor:number): void {
        const debito = new Debito(valor);

        if(this.calcularSaldo() < debito.valor){
            console.log("Limite insuficiente, favor verificar seu saldo e limite e tentar novamente");
            return;
        }

        this.transacoes.push(debito);
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

        return (totalCreditos - totalDebitos) + this.limite;
    }
}