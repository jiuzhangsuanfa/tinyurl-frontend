import { Injectable } from '@angular/core';

export interface Mapped {
  short: string;
  origin: string;
}

export interface Link {
  // type: 'short' | 'origin';
  url: string;
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
    localStorage.getItem(url);
  }

}
