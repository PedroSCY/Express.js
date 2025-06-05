import { Router } from "express";

const router = Router();

let pessoas = [
  { id: 1, nome: "João", idade: 30 },
  { id: 2, nome: "Maria", idade: 25 },
  { id: 3, nome: "Pedro", idade: 40 },
];

router.get("/", (req, res) => {
  res.status(200).send(pessoas);
});

router.get("/:id", (req, res) => {
  const pessoa = pessoas.find((pessoa) => pessoa.id === +req.params.id);
  if (pessoa) {
    res.status(200).send(pessoa);
  } else {
    res.status(204).send({ error: "Pessoa não encontrada" });
  }
});

router.post("/", (req, res) => {
  const novaPessoa = { id: pessoas.length + 1, ...req.body };
  pessoas.push(novaPessoa);
  res.status(201).send(novaPessoa);
});

router.delete("/:id", (req, res) => {
  const id = +req.params.id;
  const novaLista = pessoas.filter((pessoa) => pessoa.id !== id);
  if (novaLista.length === pessoas.length) {
    res.status(406).send(pessoas);
  } else {
    pessoas = [...novaLista];
    res.status(200).send(novaLista);
  }
});

router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const index = pessoas.findIndex((pessoa) => pessoa.id === id);
  if (index !== -1) {
    if(req.body.nome) {
        pessoas[index].nome = req.body.nome;
    }
    if(req.body.idade) {
        pessoas[index].idade = +req.body.idade;
    }
    res.status(200).send(pessoas[index]);
  } else {
    res.status(404).send({ error: "Pessoa não encontrada" });
  }
});

export default router;
