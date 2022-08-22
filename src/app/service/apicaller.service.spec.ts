import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApicallerService } from './apicaller.service';

describe('ApicallerService', () => {
  let service: ApicallerService;

  beforeEach(() => {
    const httpSpy = jasmine.createSpyObj<HttpClient>(['get'])
    service = new ApicallerService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //getPrettyCode(code, language)
});
