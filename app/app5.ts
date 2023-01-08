import { Cliente } from "./model/cliente.js";
import { ContaPoupanca } from "./model/conta-poupanca.js";

const cliente = new Cliente("98765432190", "Denis Bond", "(11)94002-8922");
const contaPoupanca = new ContaPoupanca("12345-6", 0.01, cliente);
cliente.conta = contaPoupanca;

contaPoupanca.depositar(200, new Date("2022-01-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-02-01"))
contaPoupanca.depositar(200, new Date("2022-02-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-03-01"))
contaPoupanca.depositar(200, new Date("2022-03-01"));
contaPoupanca.sacar(100, new Date("2022-03-05"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-04-01"))
contaPoupanca.depositar(200, new Date("2022-04-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-05-01"))
contaPoupanca.depositar(200, new Date("2022-05-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-06-01"))
contaPoupanca.depositar(200, new Date("2022-06-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-07-01"))
contaPoupanca.depositar(200, new Date("2022-07-01"));
contaPoupanca.sacar(200, new Date("2022-07-08"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-08-01"))
contaPoupanca.depositar(200, new Date("2022-08-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-09-01"))
contaPoupanca.depositar(200, new Date("2022-09-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-10-01"))
contaPoupanca.depositar(200, new Date("2022-10-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-11-01"))
contaPoupanca.depositar(200, new Date("2022-11-01"));

contaPoupanca.depositar(contaPoupanca.calcularRendimento(), new Date("2022-12-01"))
contaPoupanca.depositar(200, new Date("2022-12-01"));

console.log(`Saldo da conta é: ${contaPoupanca.calcularSaldo()}`);