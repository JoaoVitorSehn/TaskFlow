import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Observable, of } from 'rxjs';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class ClienteService implements BaseService<Cliente> {

  constructor() { }
  getAll(): Observable<Cliente[]> {
    return of([
      new Cliente(1, 'Super Tech Solutions', 'Super Tech Soluções Ltda','12.345.678/0001-99'),
      new Cliente(2, 'Mega Construções', 'Mega Construções e Reformas EIRELI', '98.765.432/0001-10'),
      new Cliente(3, 'Agro Vida', 'Agro Vida Produtos Agrícolas Ltda', '11.111.111/0001-01'),
      new Cliente(4, 'Auto Center Brasil', 'Auto Center Brasil Mecânica e Peças Ltda', '22.222.222/0001-02'),
      new Cliente(5, 'Mundo Pet', 'Mundo Pet Comércio de Animais Ltda', '33.333.333/0001-03')
    ]);
  }
  getById(id: number): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  create(item: Cliente): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  update(id: number, item: Cliente): Observable<Cliente> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}