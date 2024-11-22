import { Entity } from './Entity';

export class Cliente implements Entity {
    constructor(
        id: number,
        nomeFantasia: string,
        razaoSocial: string,
        cpfCnpj: string) {
        this.id = id;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cpfCnpj = cpfCnpj;
    }

    id: number;
    nomeFantasia: string;
    razaoSocial: string;
    cpfCnpj: string;
}