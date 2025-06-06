import Produto from "./Produto";

export default class RepositorioProduto {
  itens: Produto[] = [
    new Produto("Produto 1", 10.0),
    new Produto("Produto 2", 20.0),
    new Produto("Produto 3", 30.0),
  ];

  obterTodos(): Produto[] {
    return this.itens;
  }

  novo(nome: string, preco: number): Produto {
    const produto = new Produto(nome, preco);
    this.itens.push(produto);
    return produto;
  }

  obterPorCodigo(codigo: string) {
    const produto = this.itens.find((p) => p.codigo === codigo);
    return produto;
  }

  alterarPorCodigo(codigo: string, nome?: string, preco?: number) {
    const index = this.itens.findIndex((p) => p.codigo === codigo);
    if (index !== -1) {
      if (nome) {
        this.itens[index].nome = nome;
      }
      if (preco) {
        this.itens[index].preco = preco;
      }
      return this.itens[index];
    }
  }

  deletarPorCodigo(codigo: string) {
    const dadosAtualizados = this.itens.filter((p) => p.codigo !== codigo);
    this.itens = [...dadosAtualizados];
  }
}
