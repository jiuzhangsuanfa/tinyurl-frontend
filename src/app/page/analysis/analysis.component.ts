import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

interface Response {
  longUrl: string;
  sum: number;
}

function generateLastWeek(): string[] {
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  return [
    new Date(now - 6 * day).getDate().toString(),
    new Date(now - 5 * day).getDate().toString(),
    new Date(now - 4 * day).getDate().toString(),
    new Date(now - 3 * day).getDate().toString(),
    new Date(now - 2 * day).getDate().toString(),
    new Date(now - 1 * day).getDate().toString(),
    new Date(now - 0 * day).getDate().toString(),
  ];
}

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  @ViewChild('visits') visitsChartRef: ElementRef;
  @ViewChild('tops') topsChartRef: ElementRef;

  visitsChart: Chart;
  topsChart: Chart;

  data = [
    { label: 'Mon.', type: 'series1', value: 2800 },
    { label: 'Mon.', type: 'series2', value: 2260 },
    { label: 'Tues.', type: 'series1', value: 1800 },
    { label: 'Tues.', type: 'series2', value: 1300 },
    { label: 'Wed.', type: 'series1', value: 950 },
    { label: 'Wed.', type: 'series2', value: 900 },
    { label: 'Thur.', type: 'series1', value: 500 },
    { label: 'Thur.', type: 'series2', value: 390 },
    { label: 'Fri.', type: 'series1', value: 170 },
    { label: 'Fri.', type: 'series2', value: 100 },
  ];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    Chart.defaults.global.defaultFontFamily = '"Fira Code", "Consolas", "Microsoft YaHei", sans-self';
    Chart.defaults.global.defaultFontColor = 'black';
  }

  ngAfterViewInit() {

    this.http.get('http://10.0.0.159:8080/visitInfo/countLatest')
      .subscribe((responses: Response[]) => {

        const labels = responses.slice(0, 10).map(v => v.longUrl);
        const data = responses.slice(0, 10).map(v => v.sum);

        this.topsChart = new Chart(this.topsChartRef.nativeElement, {
          type: 'horizontalBar',
          data: {
            labels: responses.map(v => v.sum),
            datasets: [{
              label: 'Top 10 hosts',
              data: responses.map(v => v.sum),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              // borderColor: [
              //   'rgba(255, 99, 132, 1)',
              //   'rgba(54, 162, 235, 1)',
              //   'rgba(255, 206, 86, 1)',
              //   'rgba(75, 192, 192, 1)',
              //   'rgba(153, 102, 255, 1)',
              //   'rgba(255, 159, 64, 1)'
              // ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });


    // this.visitsChart = new Chart(this.visitsChartRef.nativeElement, {
    //   type: 'line',
    //   data: {
    //     labels: generateLastWeek(),
    //     datasets: [{
    //       label: 'Visits in the last 7 days',
    //       data: [120, 190, 30, 50, 20, 30, 210],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

  }

}
