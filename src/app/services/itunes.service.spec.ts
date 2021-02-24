import { inject, TestBed } from '@angular/core/testing';

import { ItunesService } from './itunes.service';
import axios from 'axios';

describe('ItunesService', () => {
  let service: ItunesService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      // imports: [axios]
    });
    service = TestBed.inject(ItunesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('get apps', inject([HttpT]), () => {});
});
