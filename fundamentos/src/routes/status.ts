import { Router } from "express";
import fs from "fs"; // Importando o módulo fs para manipulação de arquivos
const router = Router();

router.get("/", (req, res) => {
  res.sendStatus(200); //Usa-se o sendStatus para enviar codigos de resposta HTTP, nesse caso 200 que significa OK
});

router.get("/segredo", (req, res) => {
    res.status(401).send("Acesso negado"); // Usando status para enviar um código de status específico, nesse caso 401 que significa não autorizado
});

router.get("/naoEncontrada", (req, res) => {
    res.status(404).send("Página não encontrada"); // Usando status para enviar um código de status específico, nesse caso 404 que significa página não encontrada
});

router.get("/imagem", (req, res) => {
    if(fs.existsSync("../assets/foto")){
        res.sendStatus(200); // Verifica se o arquivo existe e envia um status 200 se existir, caso contrário envia 404
    } else {
        res.sendStatus(404);
    }
});

router.get("/erro", (req, res) => {
    res.status(500).send("Erro interno do servidor"); // Usando status para enviar um código de status específico, nesse caso 500 que significa erro interno do servidor
});

export default router; // exportando o roteador para ser usado no servidor principal