import { Injectable } from '@angular/core';
import { Mapped, Link } from '../@types/index';
import { HttpRequest } from '@angular/common/http';

export interface Result {
  short: string;
  origin: string;
}

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

  selectAll(): Result[] {
    const caches = JSON.parse(JSON.stringify(localStorage));
    const results: Result[] = [];
    for (const key in caches) {
      Object.prototype.hasOwnProperty.call(caches, key) // has own property
        && key.match(/http:\/\/mock.don.red\/tinyurl\/s\//) // is short
        && results.push({ short: key, origin: caches[key] }); // push it
    }
    return results;
  }

  cacheAble(request: HttpRequest<any>) {
    return request.url === 'http://mock.don.red/tinyurl' && request.method === 'POST';
  }

}
