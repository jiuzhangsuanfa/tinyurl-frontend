import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from '../@types/index';

export const CACHE_KEY = 'records';

export const PREFIX = 'http://mock.don.red/tinyurl/s/';

export const REG_HOST = /http[s]?:\/\/(.*?)\//;

export const REG_ID = new RegExp(PREFIX + '(.*)[/]?');

export interface Record {
  id: string;
  short: string;
  host: string;
  origin: string;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private list: Record[];

  constructor() {
    this.list = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]');
  }

  insert(links: string[]) {
    console.log(links)
    const matched = links[0].match(REG_ID);
    const record: Record = { // push it
      id: matched ? matched[1] : links[1].match(REG_ID)[1],
      short: matched ? links[0] : links[1],
      origin: matched ? links[1] : links[0],
      host: (matched ? links[1] : links[0]).match(REG_HOST)[1]
    };
    const index = this.list.findIndex(item => item.id === record.id);
    if (index === -1) {
      this.list.push(record);
    } else {
      this.list[index] = record;
    }
    this.save();
  }

  save() {
    localStorage.setItem(CACHE_KEY, JSON.stringify(this.list));
  }

  delete() { }

  modify() { }

  select({ url }: Link): string {
    const matched = url.match(REG_ID);
    if (matched) {
      return this.list.find(record => record.id === matched[1])?.origin;
    } else {
      return this.list.find(record => record.origin === url)?.short;
    }
  }

  selectAll(): Record[] {
    const caches = JSON.parse(JSON.stringify(localStorage));
    const results: Record[] = [];
    for (const key in caches) {
      Object.prototype.hasOwnProperty.call(caches, key) // has own property
        && key.match(/http:\/\/mock.don.red\/tinyurl\/s\//) // is short
        && results.push({ // push it
          id: key.match(/http:\/\/mock.don.red\/tinyurl\/(.*)$/)[1],
          short: key,
          origin: caches[key],
          host: caches[key].match(/http[s]?:\/\/(.*?)\/.*/)[1]
        });
    }
    return results;
  }

  cacheAble(request: HttpRequest<any>) {
    return request.url === 'http://mock.don.red/tinyurl' && request.method === 'POST';
  }

}
