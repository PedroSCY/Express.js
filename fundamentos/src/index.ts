import express from "express"; // iniciando uso do Express.js pra montar um servidor web
import path from "path"; // importando path pra manipular caminhos de arquivos

const app = express(); // instância do app Express
const porta = 8080; // porta onde o servidor vai escutar

//midleware 

// app.use((req,res, next)=> {
//     console.log(`Requisição recebida: ${Date.now()}`);
//     next();
// })

// Esse é um exemplo de middleware, o middleware pode ser usado para
// interceptar requisições e realizar ações antes de chegar na rota final. Ele não tem rota es específicas e por isso é executado para todas as requisições. o next é usado para passar o controle para o próximo middleware ou rota.

app.get("/", (req, res) => {
  res.send("<h1>Olá, Mundo!</h1>"); // rota inicial pra testar envio de HTML direto na resposta
});

app.get("/variavel", (req, res) => {
  let v = "Adeus"; 
  res.send(v); // testando envio de string simples como resposta via GET
});

app.get("/variavelNumerica", (req, res) => {
  let v = 1522;
  res.json(v); // agora explorando envio de número como JSON, mostrando diferença entre send e json
});

app.get("/objeto", (req, res) => {
  let obj = { nome: "Pedro", idade: 24, cidade: "Prata" };
  res.json(obj); // aqui já começa a simular uma resposta de API com objeto JSON
});

app.get("/array", (req, res) => {
  let arr = [
    { modelo: "Fusca", ano: 1970 },
    { modelo: "Civic", ano: 2020 },
    { modelo: "Onix", ano: 2021 },
  ];
  res.send(arr); // testando resposta com lista de objetos — estrutura comum em endpoints de listagem
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "pagina.html")); // enviando um arquivo HTML específico como resposta
});

app.get("/pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "assets", "exemplo.pdf")); // enviando um PDF como resposta, útil pra downloads
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`); // inicia o servidor e mostra log no terminal
});

