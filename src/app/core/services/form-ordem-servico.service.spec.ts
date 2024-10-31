import { TestBed } from '@angular/core/testing';

import { FormOrdemServicoService } from './form-ordem-servico.service';

describe('FormOrdemServicoService', () => {
  let service: FormOrdemServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOrdemServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
