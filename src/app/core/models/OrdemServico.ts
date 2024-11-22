import { Entity } from "./Entity"

export class OrdemServico implements Entity {
    constructor(
        id: number,
        numero: number,
        nomeCliente: string,
        dataCriacao: string,
        dataPrevisao: string,
        descricao: string) {
        this.id = id;
        this.numero = numero;
        this.nomeCliente = nomeCliente;
        this.dataCriacao = dataCriacao;
        this.dataPrevisao = dataPrevisao;
        this.descricao = descricao;
    }

    id: number;
    numero: number;
    nomeCliente: string;
    dataCriacao: string;
    dataPrevisao: string;
    descricao: string;
}