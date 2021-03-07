import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../@constant';
import { Link } from '../@types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private urls = {
    // prefix: `${HOST}/prefix`,
    shorten: `${HOST}/url`,
    // restore: `${HOST}/url`
  };

  constructor(
    private http: HttpClient,
  ) { }

  // getPrefix() {
  //   return this.http
  //     .get<Link>(this.urls.prefix);
  // }

  shorten(data: { url: string }) {
    return this.http
      .post<Link>(this.urls.shorten, data);
  }

  // restore(data: { url: string }) {
  //   return this.http
  //     .post<Link>(this.urls.restore, data);
  // }

}
