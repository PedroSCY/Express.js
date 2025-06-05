import { Router } from "express";

const router = Router();

// /cores/:id -> parametro de rota. O que eu quero acessar
// /cores?ordenarPor=nome&case=upper -> parametro de query. Como eu quero acessar

router.get("/cores", (req, res) => {
    let cores = ["vermelho", "verde", "azul", "amarelo", "roxo"];


    if (req.query.case === "upper") {
        cores = cores.map(cor => cor.toUpperCase()); // Converte todas as cores para maiúsculas
    } else if (req.query.case === "lower") {
        cores = cores.map(cor => cor.toLowerCase()); // Converte todas as cores para minúsculas
    }

    if (req.query.ordenarPor === "nome") {
        cores.sort(); // Ordena as cores em ordem alfabética
    } else if (req.query.ordenarPor === "tamanho") {
        cores.sort((a, b) => a.length - b.length); // Ordena as cores pelo tamanho
    }

    if(req.query.punct){
        cores = cores.map(cor => `${cor}${req.query.punct}`); // Adiciona um sufixo a cada cor
    }

    if(req.query.filter){
        cores = cores.filter(cor => cor.toLowerCase().includes(`${req.query.filter}`)); // Filtra as cores que contêm o texto especificado
    }

    res.status(200).send(cores); // Retorna a lista de cores
})

export default router;