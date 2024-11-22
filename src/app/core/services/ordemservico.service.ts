import { Injectable } from '@angular/core';
import { OrdemServico } from '../models/OrdemServico';
import { Observable, of } from 'rxjs';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class OrdemservicoService implements BaseService<OrdemServico> {

  constructor() { }
  getAll(): Observable<OrdemServico[]> {
    return of([
      new OrdemServico(1, 101, '2024-01-10', '2024-01-20', 'João da Silva', 'Reparo de ar-condicionado'),
      new OrdemServico(1, 102, '2024-02-15', '2024-02-25', 'Maria Souza', 'Instalação de sistema de ventilação'),
      new OrdemServico(1, 103, '2024-03-05', '2024-03-12', 'Carlos Santos', 'Manutenção preventiva de máquinas')
    ]);
  }

  getById(id: number): Observable<OrdemServico> {
    throw new Error('Method not implemented.');
  }

  create(item: OrdemServico): Observable<OrdemServico> {
    throw new Error('Method not implemented.');
  }

  update(id: number, item: OrdemServico): Observable<OrdemServico> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}