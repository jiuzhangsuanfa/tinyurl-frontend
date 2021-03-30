import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../@constant';
import { Host, Hosts, Link } from '../@types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private urls = {
    hosts: `${HOST}/hosts`,
    transform: `${HOST}/link`,
  };

  constructor(
    private http: HttpClient,
  ) { }

  getHosts() {
    return this.http
      .get<Hosts>(this.urls.hosts);
  }

  transform(data: { url: string }) {
    return this.http
      .post<Link>(this.urls.transform, data);
  }

}
