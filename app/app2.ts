import { Cliente } from "./model/cliente.js";
import { Endereco } from "./model/endereco.js";

const andersonCliente = new Cliente("12345678910", "Anderson Bond", "2140028922");

const endereco1 = new Endereco(andersonCliente, "12345-678", "Rua Palmeira", "345", "casa", "São Paulo", "SP");
andersonCliente.endereco = endereco1;
const endereco2 = new Endereco(andersonCliente, "98765-432", "Rua Bananada", "200", "casa", "Belo Horizonte", "MG");
andersonCliente.endereco = endereco2
const endereco3 = new Endereco(andersonCliente, "58593-000", "Rua Goiabada", "666", "ap 110", "Uberlândia", "MG");
andersonCliente.endereco = endereco3;

andersonCliente.listarEnderecos();