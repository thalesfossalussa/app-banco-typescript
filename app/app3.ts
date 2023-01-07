import { Cliente } from "./model/cliente.js";
import { ContaCorrente } from "./model/conta-corrente.js";

const cliente = new Cliente("12345678910", "Anderson Bond", "2140028922");

const contaCorrente = new ContaCorrente("25786-X", 500, cliente);
cliente.conta = contaCorrente;

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);

contaCorrente.sacar(50);

console.log(contaCorrente.calcularSaldo());