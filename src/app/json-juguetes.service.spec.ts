import { TestBed } from '@angular/core/testing';

import { JsonJuguetesService } from './json-juguetes.service';

describe('JsonJuguetesService', () => {
  let service: JsonJuguetesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonJuguetesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
