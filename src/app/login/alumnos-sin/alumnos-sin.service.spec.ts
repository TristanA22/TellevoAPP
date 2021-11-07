import { TestBed } from '@angular/core/testing';

import { AlumnosSinService } from './alumnos-sin.service';

describe('AlumnosSinService', () => {
  let service: AlumnosSinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnosSinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
