import {Component, OnInit} from '@angular/core';
import {P1MeterApiService} from "./p1-meter-api/p1-meter-api.service";
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
        data: this.data,
        lineStyle: {
          // Straight line indicator style settings
          color: this.data.length % 2 !== 0 ? '#ffffff' : '#801c1c',
          type: 'solid'
        },
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
        axisLine: {
          lineStyle: {
            color: '#fd31e4'
          }
        },
        // splitArea: {
        //   show: true,
        //   areaStyle: {
        //     color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
        //   }
        // },
        splitLine: {
          lineStyle: {
            color: ['#eee']
          }
        },
        type: 'time',
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
        areaStyle: {
          color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
        },
        lineStyle: {
          // Straight line indicator style settings
          color: this.data.length % 2 !== 0 ? '#ffffff' : '#801c1c',
          type: 'solid'
        },
        showSymbol: false,
        emphasis: {
          line: false,
        },
        data: this.data
      }]
    };
  }

  formatData(data: any) {
    const now = new Date(Date.now());
    this.value = data['active_power_w']
    return {
      name: [now.getHours(), now.getMinutes(), now.getSeconds()].join(':') + ``,
      value: [
        now,
        now.getSeconds() % 2 == 0 ? this.value : this.value - 250
      ]
    };
  }


  getDa() {
    return {name: 'Energy', value: 50};
  }
}
