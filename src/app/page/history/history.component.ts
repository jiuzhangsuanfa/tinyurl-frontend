import { Component, OnInit } from '@angular/core';
import { CacheService, Result } from 'src/app/service/cache.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  records: Result[] = [];

  constructor(
    public cache: CacheService
  ) {
    this.records = cache.selectAll();
  }

  ngOnInit() { }

}
