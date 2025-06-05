import { Router } from "express";

const router = Router(); // criando uma instância do roteador do Express

// Definindo uma rota aninhada
router.get("/", (req, res) => {
  res.send("Aqui existem produtos");
});
router.get("/cozinha", (req, res) => {
  const prods = (["Colher", 'Garfo', 'Faca', 'Panela']);
  res.send(prods);
});
router.get("/banheiro", (req, res) => {
  const prods = (["Escova", 'Sabonete', 'Toalha', 'Desodorante']);
  res.send(prods);
});

export default router; // exportando o roteador para ser usado no servidor principal