import express from "express"; // iniciando uso do Express.js pra montar um servidor web
import rotasBasico from "./routes/basico"; // importando as rotas básicas definidas em outro arquivo
import rotasDiferentesRetornos from "./routes/diferentesRetornos"; // importando rotas que retornam diferentes tipos de dados
import rotasAninhadas from "./routes/rotasAninhadas"; 
import rotasStatus from "./routes/status"; // importando rotas que lidam com status HTTP
import rotasParametrosDeRota from "./routes/parametrosDeRota"; // importando rotas que lidam com parâmetros de rota
import rotasParametrosDeQuery from "./routes/parametrosDeQuery"; // importando rotas que lidam com parâmetros de consulta (query parameters)
import rotasMetodos from "./routes/metodos"; // importando rotas que lidam com diferentes métodos HTTP


const app = express(); // instância do app Express
const porta = 8080; // porta onde o servidor vai escutar


//midleware

// app.use((req,res, next)=> {
//     console.log(`Requisição recebida: ${Date.now()}`);
//     next();
// })

// Esse é um exemplo de middleware, o middleware pode ser usado para
// interceptar requisições e realizar ações antes de chegar na rota final. Ele não tem rota es específicas e por isso é executado para todas as requisições. o next é usado para passar o controle para o próximo middleware ou rota.

/* ************************************ IMPORTANTE ************************************** */

// O express não consegue ler o body da requisição por padrão, então precisamos usar um middleware para isso. O express já tem um middleware pronto para ler o body da requisição, que é o express.urlencoded e express.json.

//Middleware para leitura do body da requisição
app.use(express.urlencoded({ extended: true })); // Middleware para interpretar dados de formulários
app.use(express.json()); // Middleware para interpretar JSON no corpo da requisição


app.use(rotasBasico);
app.use(rotasDiferentesRetornos);
app.use("/produtos", rotasAninhadas); // Todas as rotas definidas em rotasAninhadas serão acessíveis sob o caminho /produtos.
app.use("/status", rotasStatus); // Todas as rotas definidas em rotasStatus serão acessíveis sob o caminho /status.
app.use("/parametrosDeRota", rotasParametrosDeRota); // Todas as rotas definidas em rotasParametrosDeRota serão acessíveis sob o caminho /frutas.
app.use("/parametrosDeQuery", rotasParametrosDeQuery); // Todas as rotas definidas em rotasParametrosDeQuery serão acessíveis sob o caminho /cores.
app.use("/metodos", rotasMetodos); // Todas as rotas definidas em rotasMetodos serão acessíveis sob o caminho /metodos.

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`); // inicia o servidor e mostra log no terminal
});

