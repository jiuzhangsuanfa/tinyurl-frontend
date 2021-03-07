/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Host, Link } from '../@types';

const CACHE_KEY = 'CACHE_KEY';
const HOSTS_KEY = 'HOSTS_KEY';

@Injectable({
  providedIn: 'root',
})
export class CacheService {

  private links: Link[];
  private hosts: Host[] = [];

  constructor() {
    this.links = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]');
  }

  insert(links: string[]) {
    throw new Error('not implement');
  }

  save() {
    localStorage.setItem(CACHE_KEY, JSON.stringify(this.links));
  }

  delete() {
    throw new Error('not implement');
  }

  modify() {
    throw new Error('not implement');
  }

  select(link: Link): string | undefined {
    throw new Error('not implement');
  }

  selectAll(): Link[] {
    throw new Error('not implement');
  }

  cacheAble(request: HttpRequest<any>) {
    throw new Error('not implement');
  }

  setHosts(hosts: Host[]) {
    this.hosts = hosts;
    localStorage.setItem(HOSTS_KEY, JSON.stringify(hosts));
  }

  getHosts() {
    return this.hosts;
  }

  getDomain() {
    return this.hosts[0]?.domain || 'example.com';
  }

}
