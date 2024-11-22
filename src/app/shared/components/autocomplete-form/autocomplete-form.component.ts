import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { filter, map, Observable, startWith, switchMap } from 'rxjs';
import { FormOrdemServicoService } from '../../../core/services/form-ordem-servico.service';
import { Entity } from '../../../core/models/Entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete-form',
  standalone: true,
  imports:
    [
      MatAutocompleteModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      CommonModule
    ],
  templateUrl: './autocomplete-form.component.html',
  styleUrl: './autocomplete-form.component.scss'
})
export class AutocompleteFormComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() placeHolder!: string;
  @Input() source!: Observable<Entity[]>;
  @Input() displayMemberPath : string = "";

  ngOnInit(): void {
    this.filteredData = this.control.valueChanges.pipe(
      startWith(''),
      switchMap(value => {
        const name = typeof value === 'string' ? value : this.getDisplayValue(value);
        return name ? this._filter(name as string) : this.source;
      })
    );
  }

  public filteredData: Observable<Entity[]> = new Observable<Entity[]>();

  private _filter(value: string): Observable<any[]> {
    const filterValue = value.toLowerCase();
  
    return this.source.pipe(
      map(items =>
        items.filter(item => {
          const displayValue = this.getDisplayValue(item).toLowerCase();
          return displayValue.includes(filterValue);
        })
      )
    );
  }

  public getDisplayValue(option: any): string {
    return this.displayMemberPath ? option[this.displayMemberPath] : option;
  }
}