import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-consulta-funcionarios',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './consulta-funcionarios.component.html',
  styleUrl: './consulta-funcionarios.component.scss'
})
export class ConsultaFuncionariosComponent {
}