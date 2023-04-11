import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      return next.handle(req);
    }

    const authToken = '6e526643f73a9c84490ec4a8803323059a99f9c240633c8872b64db0de976696'; //Normalmente estaria almacenado en el local storage
    const authReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) });
    return next.handle(authReq);
  }
}
