import { Router } from "express";

const router = Router();

router.get("/frutas/:id", (req, res) => {
  const frutas = ["maçã", "banana", "laranja"];
  const id = +req.params.id; // Obtém o parâmetro de rota 'id' da URL
  if (id >= 0 && id < frutas.length) {
    res.status(200).send(frutas[id]); // Retorna a fruta correspondente ao ID
  } else {
    res.sendStatus(204);
  }
});

router.get("/pessoa/:nome/:cor", (req, res) => {
  const novaPessoa = { nome: req.params.nome, cor: req.params.cor }; // Cria um objeto com os parâmetros 'nome' e 'cor' da URL
  res.status(201).send(`A cor favorita de ${novaPessoa.nome} é ${novaPessoa.cor}`); 
});

export default router;
