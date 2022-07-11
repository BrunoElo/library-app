import { TestBed } from '@angular/core/testing';

import { NgxStuffService } from './ngx-stuff.service';

describe('NgxStuffService', () => {
  let service: NgxStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
