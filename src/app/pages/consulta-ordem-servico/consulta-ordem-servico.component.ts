import { Component, OnInit } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { OrdemServico } from '../../core/models/OrdemServico';
import { ContainerComponent } from "../../shared/container/container.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormOrdemServicoService } from '../../core/services/form-ordem-servico.service';
import { OrdemservicoService } from '../../core/services/ordemservico.service';
import { ClienteService } from '../../core/services/cliente.service';
import { Cliente } from '../../core/models/Cliente';

@Component({
  selector: 'app-consulta-ordem-servico',
  standalone: true,
  imports: [
    MainComponent,
    MatTableModule,
    ContainerComponent,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatSelectModule,
  ],
  templateUrl: './consulta-ordem-servico.component.html',
  styleUrl: './consulta-ordem-servico.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ConsultaOrdemServicoComponent implements OnInit {
  constructor(
    public formBuscaService: FormOrdemServicoService,
    private ordemServicoService: OrdemservicoService,
    private clienteService: ClienteService
  ) { }
  ngOnInit(): void {
    this.ordemServicoService.getOrdemServico()
      .subscribe(response => {
        this.dataSource = response
      });

    this.clienteService.getClientes()
      .subscribe(response =>
        this.clientes = response
      )
  }

  public clientes: Cliente[] = [];
  public dataSource: OrdemServico[] = [];
  public columns = [
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
  public opcoesData = [
    "Data de previsão",
    "Data de criação",
    "Data de conclusão"
  ]

  private _filter(value: string): Cliente[] {
    let filterValue = value.toLowerCase();

    return this.clientes.filter(cliente => cliente.nomeFantasia.toLowerCase().includes(filterValue));
  }

  displayedColumns = this.columns.map(c => c.columnDef);
}