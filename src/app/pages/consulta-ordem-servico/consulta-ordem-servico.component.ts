import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { MatTableModule } from '@angular/material/table';
import { OrdemServico } from '../../core/models/OrdemServico';
import { ContainerComponent } from "../../shared/container/container.component";

@Component({
  selector: 'app-consulta-ordem-servico',
  standalone: true,
  imports: [
    MainComponent,
    MatTableModule,
    ContainerComponent
],
  templateUrl: './consulta-ordem-servico.component.html',
  styleUrl: './consulta-ordem-servico.component.scss'
})
export class ConsultaOrdemServicoComponent {
  columns = [
    {
      columnDef: 'os',
      header: 'OS',
      cell: (element: OrdemServico) => `${element.numero}`,
    },
    {
      columnDef: 'criacao',
      header: 'Data criação',
      cell: (element: OrdemServico) => `${element.dataCriacao}`,
    },
    {
      columnDef: 'previsao',
      header: 'Data previsão',
      cell: (element: OrdemServico) => `${element.dataPrevisao}`,
    },
    {
      columnDef: 'cliente',
      header: 'Cliente',
      cell: (element: OrdemServico) => `${element.nomeCliente}`,
    },
    {
      columnDef: 'descricao',
      header: 'Descrição',
      cell: (element: OrdemServico) => `${element.descricao}`,
    }
  ];

  dataSource: OrdemServico[] = [
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
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
}