import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apis = {
    transform: 'http://mock.don.red/tinyurl',
    view: 'http://mock.don.red/tinyurl/view',
    site: 'http://mock.don.red/tinyurl/site'
  };

  constructor(
    private http: HttpClient
  ) { }

  transformURL(data: { url: string }) {
    return this.http
      .post(this.apis.transform, data);
  }

  getLastWeekViews() {
    return this.http
      .get(this.apis.view, { params: { day: '7', order: 'DESC' } });
  }

  getLastWeekTop10Site() {
    return this.http
      .get(this.apis.site, { params: { day: '7', order: 'DESC' } })
  }

}
