import { TestBed } from '@angular/core/testing';

import { ToastResponseService } from './toast-response.service';

describe('ToastResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastResponseService = TestBed.get(ToastResponseService);
    expect(service).toBeTruthy();
  });
});
