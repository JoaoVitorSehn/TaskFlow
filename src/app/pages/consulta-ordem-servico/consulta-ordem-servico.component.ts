import { Component, OnInit } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { OrdemServico } from '../../core/models/OrdemServico';
import { ContainerComponent } from "../../shared/container/container.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormOrdemServicoService } from '../../core/services/form-ordem-servico.service';
import { OrdemservicoService } from '../../core/services/ordemservico.service';
import { ClienteService } from '../../core/services/cliente.service';
import { AutocompleteFormComponent } from "../../shared/components/autocomplete-form/autocomplete-form.component";

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
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    AutocompleteFormComponent
  ],
  templateUrl: './consulta-ordem-servico.component.html',
  styleUrl: './consulta-ordem-servico.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ConsultaOrdemServicoComponent {
  constructor(
    private ordemServicoService: OrdemservicoService,
    public formBuscaService: FormOrdemServicoService,
    public clienteService: ClienteService
  ) { }

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

  dataSource = this.ordemServicoService.getAll();
  displayedColumns = this.columns.map(c => c.columnDef);
}