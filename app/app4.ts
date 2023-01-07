import { Cliente } from "./model/cliente.js";
import { ContaCorrente } from "./model/conta-corrente.js";
import { ContaPoupanca } from "./model/conta-poupanca.js";

const cliente1 = new Cliente("12345678910", "Anderson Bond", "(21)4002-8922");

const contaCorrente = new ContaCorrente("25786-X", 500, cliente1);
cliente1.conta = contaCorrente;

const cliente2 = new Cliente("98765432190", "Denis Bond", "(11)94002-8922");
const contaPoupanca = new ContaPoupanca("12345-6", 0.03, cliente2);
cliente1.conta = contaPoupanca;

contaCorrente.depositar(1000);

contaPoupanca.depositar(1000);

contaCorrente.transferir(contaPoupanca, 500);

console.log(`Saldo conta corrente de ${cliente1.nome}: ${contaCorrente.calcularSaldo()}`);
console.log(`Saldo conta poupança de ${cliente2.nome}: ${contaPoupanca.calcularSaldo()}`);