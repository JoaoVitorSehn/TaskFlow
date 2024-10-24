export interface OrdemServico{
    id: number,
    dataCriacao: Date,
    dataPrevisao: Date
    descricao: string,
    laudo: string,
    clienteId: number
}