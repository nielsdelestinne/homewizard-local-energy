import {Component, OnInit} from '@angular/core';
import {P1MeterApiService} from "./p1-meter-api.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  options: any;

  updateOptions: any;
  private oneSecond = 1000;

  private iteration = 0;
  private value!: number;
  private data!: any[];
  private timer: any;

  public data$ = this.p1MeterApiService.retrieveData().pipe(tap(data => {
    if (this.data.length > 60 * 15) {
      this.data.shift();
    }
    this.data.push(this.formatData(data));
    this.updateOptions = {
      series: [{
        data: this.data
      }]
    };
  }));

  constructor(private p1MeterApiService: P1MeterApiService) {
  }

  ngOnInit(): void {
    // generate some random testing data:
    this.data = [];

    // initialize chart options:
    this.options = {
      title: {
        text: 'Dynamic Data + Time Axis'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any[]) => {
          params = params[0];
          // @ts-ignore
          return params['name'] + ' : ' + params['value'][1];
        },
        axisPointer: {
          animation: true
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [{
        name: 'Mocking Data',
        type: 'line',
        showSymbol: false,
        emphasis: {
          line: false,
        },
        data: this.data
      }]
    };
  }

  formatData(data: any) {
    this.iteration += 1;
    const now = new Date(Date.now());
    this.value = data['active_power_w']
    return {
      name: [now.getHours(), now.getMinutes(), now.getSeconds()].join(':') + ``,
      value: [
        now,
        this.value
      ]
    };
  }


}
