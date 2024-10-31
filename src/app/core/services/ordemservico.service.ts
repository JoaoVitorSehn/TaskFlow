import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdemServico } from '../models/OrdemServico';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemservicoService {

  constructor() { }

  getOrdemServico(): Observable<OrdemServico[]> {
    return of([
      {
        numero: 101,
        dataCriacao: '2024-01-10',
        dataPrevisao: '2024-01-20',
        nomeCliente: 'João da Silva',
        descricao: 'Reparo de ar-condicionado',
      },
      {
        numero: 102,
        dataCriacao: '2024-02-15',
        dataPrevisao: '2024-02-25',
        nomeCliente: 'Maria Souza',
        descricao: 'Instalação de sistema de ventilação',
      },
      {
        numero: 103,
        dataCriacao: '2024-03-05',
        dataPrevisao: '2024-03-12',
        nomeCliente: 'Carlos Santos',
        descricao: 'Manutenção preventiva de máquinas',
      },
    ]);
  }
}