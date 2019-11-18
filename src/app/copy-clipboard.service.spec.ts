import { TestBed, inject } from '@angular/core/testing';

import { CopyClipboardService } from './copy-clipboard.service';

describe('CopyClipboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CopyClipboardService]
    });
  });

  it('should be created', inject([CopyClipboardService], (service: CopyClipboardService) => {
    expect(service).toBeTruthy();
  }));
});
