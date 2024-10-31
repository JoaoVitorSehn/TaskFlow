import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    return of([
      {
        id: 1,
        nomeFantasia: 'Super Tech Solutions',
        razaoSocial: 'Super Tech Soluções Ltda',
        cpfCnpj: '12.345.678/0001-99',
      },
      {
        id: 2,
        nomeFantasia: 'Mega Construções',
        razaoSocial: 'Mega Construções e Reformas EIRELI',
        cpfCnpj: '98.765.432/0001-10',
      },
      {
        id: 3,
        nomeFantasia: 'Agro Vida',
        razaoSocial: 'Agro Vida Produtos Agrícolas Ltda',
        cpfCnpj: '11.111.111/0001-01',
      },
      {
        id: 4,
        nomeFantasia: 'Auto Center Brasil',
        razaoSocial: 'Auto Center Brasil Mecânica e Peças Ltda',
        cpfCnpj: '22.222.222/0001-02',
      },
      {
        id: 5,
        nomeFantasia: 'Mundo Pet',
        razaoSocial: 'Mundo Pet Comércio de Animais Ltda',
        cpfCnpj: '33.333.333/0001-03',
      }
    ])
  }
}