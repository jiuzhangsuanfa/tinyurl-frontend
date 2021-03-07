import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../@types/index';
import { CacheService } from '../service/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: CacheService,
  ) { }

  intercept(request: HttpRequest<Link>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }

}
