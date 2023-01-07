import { Cargo } from "./model/cargo.js";
import { Funcionario } from "./model/funcionario.js";

const novoGerente = new Funcionario("12345678910", "James Bond", "1140028922", 50000);
const cargoGerente = new Cargo("Gerente", novoGerente);
novoGerente.cargo = cargoGerente;
console.log(`${novoGerente.cargos[novoGerente.cargos.length - 1].nome} ${novoGerente.nome} cadastrado com sucesso`);

const novoAtendente = new Funcionario("98765432190", "Carlos Eduardo", "1112345678", 1320);
const cargoAtendente = new Cargo("Atendente", novoAtendente);
novoAtendente.cargo = cargoAtendente;
console.log(`${novoAtendente.cargos[novoAtendente.cargos.length - 1].nome} ${novoAtendente.nome} cadastrado com sucesso`);