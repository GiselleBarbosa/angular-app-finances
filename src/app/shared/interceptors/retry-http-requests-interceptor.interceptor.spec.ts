import { TestBed } from '@angular/core/testing';

import { RetryHttpRequestsInterceptorInterceptor } from './retry-http-requests-interceptor.interceptor';

describe('RetryHttpRequestsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RetryHttpRequestsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RetryHttpRequestsInterceptorInterceptor = TestBed.inject(RetryHttpRequestsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
