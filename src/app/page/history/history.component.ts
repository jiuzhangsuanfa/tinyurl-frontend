import { Component, OnInit } from '@angular/core';

interface Record {
  origin: string;
  short: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  records: Record[] = [];

  constructor() { }

  ngOnInit() { }

}
