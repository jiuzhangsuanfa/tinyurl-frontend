/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link, Record } from '../@types';

const CACHE_KEY = 'records';

const PREFIX = 'http://mock.don.red/tinyurl/s/';

const REG_HOST = /http[s]?:\/\/(.*?)\//;

const REG_ID = new RegExp(PREFIX + '(.*)[/]?');

@Injectable({
  providedIn: 'root',
})
export class CacheService {

  private list: Record[];

  constructor() {
    this.list = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]');
  }

  insert(links: string[]) {
    const matched = links[0].match(REG_ID);
    const record: Record = { // push it
      id: matched ? matched[1] : links[1].match(REG_ID)![1],
      short: matched ? links[0] : links[1],
      origin: matched ? links[1] : links[0],
      host: (matched ? links[1] : links[0]).match(REG_HOST)![1],
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

  delete() {
    throw new Error('not implement');
  }

  modify() {
    throw new Error('not implement');
  }

  select({ url }: Link): string | undefined {
    const matched = url.match(REG_ID);
    if (matched) {
      return this.list.find(record => record.id === matched[1])?.origin;
    } else {
      return this.list.find(record => record.origin === url)?.short;
    }
  }

  selectAll(): Record[] {
    return [...this.list];
  }

  cacheAble(request: HttpRequest<any>) {
    return request.url === 'http://mock.don.red/tinyurl' && request.method === 'POST';
  }

}
