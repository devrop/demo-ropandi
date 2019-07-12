import { TestBed } from '@angular/core/testing';

import { SwalUtilService } from './swal-util.service';

describe('SwalUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwalUtilService = TestBed.get(SwalUtilService);
    expect(service).toBeTruthy();
  });
});
