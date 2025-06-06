import { Router } from "express";
import RepositorioProduto from "../core/produtos/RepositorioProduto";

const router = Router();
const repositorio = new RepositorioProduto();

router.get("/", (req, res) => {
  const produtos = repositorio.obterTodos();
  res.send(produtos);
});

router.post("/", (req, res) => {
  const { nome, preco } = req.body;
  const produto = repositorio.novo(nome, preco);
  res.status(201).send(produto);
});

router.get("/:codigo", (req, res) => {
  const { codigo } = req.params;
  const produto = repositorio.obterPorCodigo(codigo);
  if(produto){
    res.status(200).send(produto);
  } else {
    res.status(404).send({ error: "Produto não encontrado" });
  }
});

router.put("/:codigo", (req, res) => {
  const { codigo } = req.params;
  const { nome, preco } = req.body;
  const produto = repositorio.alterarPorCodigo(codigo, nome, preco);
  if (produto) {
    res.status(200).send(produto);
  } else {
    res.status(404).send({ error: "Produto não encontrado" });
  }
});

router.delete("/:codigo", (req, res) => {
  const { codigo } = req.params;
  repositorio.deletarPorCodigo(codigo);
  res.status(200).send();
});

export default router;