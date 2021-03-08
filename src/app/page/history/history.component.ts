import { Component, OnInit } from '@angular/core';
import { Host, Link } from 'src/app/@types';
import { CacheService } from 'src/app/service/cache.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(
    public cache: CacheService,
  ) { }

  ngOnInit() { }

  getUrl(id: string) {
    return `https://${this.cache.getDomain()}/${id}`;
  }

  getHostname(url: string) {
    return new URL(url).hostname;
  }

  getLinks() {
    return this.cache.selectAll().sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }

  trackBy(index: number, item: Link) {
    return item.id;
  }

}
