import { Router } from "express";

const router = Router() // criando uma instância do roteador do Express

router.get("/", (req, res) => {
  res.send("<h1>Olá, Mundo!</h1>"); // rota inicial pra testar envio de HTML direto na resposta
});

export default router; // exportando o roteador para ser usado no servidor principal
// Esse arquivo define uma rota básica que responde com um HTML simples quando acessada a raiz do servidor. É um ponto de partida para construir rotas mais complexas no futuro.