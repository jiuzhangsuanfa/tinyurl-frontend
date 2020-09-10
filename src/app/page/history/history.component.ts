import { Component, OnInit } from '@angular/core';
import { CacheService, Record } from 'src/app/service/cache.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  records: Record[] = [];

  constructor(
    public cache: CacheService
  ) {
    this.records = cache.selectAll();
  }

  ngOnInit() { }

}
