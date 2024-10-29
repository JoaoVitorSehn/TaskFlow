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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

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
    MatSelectModule
],
  templateUrl: './consulta-ordem-servico.component.html',
  styleUrl: './consulta-ordem-servico.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ConsultaOrdemServicoComponent implements OnInit{
  filteredOptions!: Observable<string[]>;
  myControl = new FormControl('');
  selectedValue: string = "";
  options: string[] = ['apple', 'banana', 'cherry'];
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  opcoesData = [
    "Data de previsão",
    "Data de criação",
    "Data de conclusão"
  ]

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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayedColumns = this.columns.map(c => c.columnDef);
}