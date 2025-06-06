import { Id } from "../shared/Id";

export default class Produto {

    nome: string;
    preco: number;
    codigo: string;

    constructor( nome: string, preco: number = 0) {
        this.nome = nome;
        this.preco = preco;
        this.codigo = Id.novo();
    }

    public getNome(): string {
        return this.nome;
    }
    
    public getPreco(): number {
        return this.preco;
    }
    
    public getCodigo(): string {
        return this.codigo;
    }
}