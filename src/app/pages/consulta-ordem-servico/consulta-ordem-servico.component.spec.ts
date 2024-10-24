import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaOrdemServicoComponent } from './consulta-ordem-servico.component';

describe('ConsultaOrdemServicoComponent', () => {
  let component: ConsultaOrdemServicoComponent;
  let fixture: ComponentFixture<ConsultaOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaOrdemServicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
