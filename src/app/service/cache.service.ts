import { Injectable } from '@angular/core';
import { Mapped, Link } from '../@types/index';

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
    return localStorage.getItem(url) ?? undefined;
  }

}
