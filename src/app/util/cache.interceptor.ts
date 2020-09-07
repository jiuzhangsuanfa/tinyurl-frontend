import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Link } from '../@types/index';
import { CacheService } from '../service/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: CacheService
  ) { }

  intercept(request: HttpRequest<Link>, next: HttpHandler): Observable<any> {
    const url = this.cache.select(request.body);
    return url ? of({ url }) : next.handle(request);
  }

}
