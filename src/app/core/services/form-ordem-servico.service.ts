import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormOrdemServicoService {
  public formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      dataInicial: new FormControl<Date | null>(null),
      dataFinal: new FormControl<Date | null>(null),
      tipoFiltro: new FormControl("Data criação"),
      numeroOs: new FormControl(null),
      nomeCliente: new FormControl(null)
    });
  }

  obterControle(nome:string): FormControl {
    const control = this.formBusca.get(nome);
    return control as FormControl;
  }
}