import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class tokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const token = 'BQCCeFeNPWUEfWm8I94-d5Yvq5-EmXYzE5cR5GtjHjF8sBmZjx4uTbcyMccxS9ejtC6cpicuOlSkhRncx7YLbZkYnS4GaqzCDHglb2hVbIwSeXhuvVA';

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const modifiedRequest = request.clone({
      headers: headers
    });

    return next.handle(modifiedRequest);
  }
}