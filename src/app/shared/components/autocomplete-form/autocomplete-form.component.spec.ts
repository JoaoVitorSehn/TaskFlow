import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFormComponent } from './autocomplete-form.component';

describe('AutocompleteFormComponent', () => {
  let component: AutocompleteFormComponent;
  let fixture: ComponentFixture<AutocompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutocompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
