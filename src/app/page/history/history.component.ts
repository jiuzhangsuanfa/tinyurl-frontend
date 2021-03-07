import { Component, OnInit } from '@angular/core';
import { Host, Link } from 'src/app/@types';
import { CacheService } from 'src/app/service/cache.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  links: Link[] = [];
  domain: string;

  constructor(
    public cache: CacheService,
  ) {
    this.links = cache.selectAll();
    this.domain = cache.getDomain();
  }

  ngOnInit() { }

  getUrl(id: string) {
    return `https://${this.domain}/${id}`;
  }

  getHostname(url: string) {
    return new URL(url).hostname;
  }

}
