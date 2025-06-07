import { Router } from "express";
import RepositorioUsuario from "../core/usuarios/RepositorioUsuario";
import jwt from "jsonwebtoken";

const router = Router();
const repo = new RepositorioUsuario();

router.post("/", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    res.status(400).send({ error: "Email e senha são obrigatórios." });
  } else if (!repo.usuarioExiste(email)) {
    res.status(404).send({ error: "Usuário não encontrado." });
  } else if (!repo.loginCorreto(email, senha)) {
    res.status(401).send({ error: "Email ou senha inválidos." });
  } else {
    const token = jwt.sign({ email, senha }, process.env.ACCESS_TOKEN_SECRET as "Secret", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  }
});

export default router;
