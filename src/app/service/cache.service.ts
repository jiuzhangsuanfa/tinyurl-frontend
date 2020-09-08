import { Injectable } from '@angular/core';
import { Mapped, Link } from '../@types/index';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  insert({ short, origin }: Mapped) {
    localStorage.setItem(short, origin);
    localStorage.setItem(origin, short);
  }

  delete() { }

  modify() { }

  select({ url }: Link) {
    return localStorage.getItem(url);
  }

  cacheAble(request: HttpRequest<any>) {
    return request.url === 'http://mock.don.red/tinyurl' && request.method === 'POST';
  }

}
