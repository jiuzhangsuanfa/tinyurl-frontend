import { Component, OnInit } from '@angular/core';
import { Host, Link } from 'src/app/@types';
import { CacheService } from 'src/app/service/cache.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  records: Link[] = [];
  hosts: Host[] = [];

  constructor(
    public cache: CacheService,
  ) {
    this.records = cache.selectAll();
    this.hosts = cache.getHosts();
  }

  ngOnInit() { }

}
