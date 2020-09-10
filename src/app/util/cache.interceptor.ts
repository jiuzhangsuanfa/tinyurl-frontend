import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Link } from '../@types/index';
import { CacheService } from '../service/cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: CacheService
  ) { }

  intercept(request: HttpRequest<Link>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.cache.cacheAble(request)) {

      const cached = this.cache.select(request.body);

      if (cached) {
        // see this issue: [Angular HTTP Client Interceptor not working when returning custom Observable](https://stackoverflow.com/questions/48048564/angular-http-client-interceptor-not-working-when-returning-custom-observable)
        return of(new HttpResponse({ body: { url: cached } }));
      } else {
        return next
          .handle(request)
          .pipe(
            filter(response => response instanceof HttpResponse),
            tap((response: HttpResponse<Link>) => this.cache.insert([request.body.url, response.body.url]))
          );
      }

    } else {
      return next.handle(request);
    }

  }

}
