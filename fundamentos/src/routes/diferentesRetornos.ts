import path from "path"; // importando path pra manipular caminhos de arquivos
import { Router } from "express";

const router = Router(); // criando uma instância do roteador do Express
// Esse arquivo define várias rotas que retornam diferentes tipos de dados, como strings, números, objetos JSON e arquivos estáticos. É uma boa prática para entender como o Express lida com diferentes tipos de respostas.

router.get("/variavel", (req, res) => {
  let v = "Adeus"; 
  res.send(v); // testando envio de string simples como resposta via GET
});

router.get("/variavelNumerica", (req, res) => {
  let v = 1522;
  res.json(v); // agora explorando envio de número como JSON, mostrando diferença entre send e json
});

router.get("/objeto", (req, res) => {
  let obj = { nome: "Pedro", idade: 24, cidade: "Prata" };
  res.json(obj); // aqui já começa a simular uma resposta de API com objeto JSON
});

router.get("/array", (req, res) => {
  let arr = [
    { modelo: "Fusca", ano: 1970 },
    { modelo: "Civic", ano: 2020 },
    { modelo: "Onix", ano: 2021 },
  ];
  res.send(arr); // testando resposta com lista de objetos — estrutura comum em endpoints de listagem
});

router.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "assets", "pagina.html")); // enviando um arquivo HTML específico como resposta
});

router.get("/pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "assets", "exemplo.pdf")); // enviando um PDF como resposta, útil pra downloads
});

export default router; // exportando o roteador para ser usado no servidor principal