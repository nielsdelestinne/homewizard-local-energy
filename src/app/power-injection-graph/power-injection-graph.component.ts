import {Component, Input, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {P1MeterApiService} from "../p1-meter-api/p1-meter-api.service";
import {NamedNumericalValue, P1Data} from "../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-power-injection-graph',
  templateUrl: './power-injection-graph.component.html',
  styleUrls: ['./power-injection-graph.component.scss']
})
export class PowerInjectionGraphComponent {

  graphConfigurationOptions = this.configuredOptions();
  graphUpdatedSeries = this.createGraphSeries();

  get powerInjection(): NamedNumericalValue {
    return this._powerInjection;
  }

  @Input() set powerInjection(newValue: NamedNumericalValue) {
    this._powerInjection = newValue;
    this.updatePowerInjectionHistory(newValue);
    this.graphUpdatedSeries = this.createGraphSeries();
  }

  private readonly amountOfPowerInjectionHistoryToKeep = 60 * 15;
  private powerInjectionHistory: any[] = [];
  private _powerInjection!: NamedNumericalValue;

  readonly powerInjectionScale = {
    veryGood: {color: 'very-good', icon: 'bi-chevron-double-up'},
    good: {color: 'good', icon: 'bi-chevron-up'},
    neutral: {color: 'neutral', icon: 'bi-chevron-down'},
    bad: {color: 'bad', icon: 'bi-chevron-double-down'},
    veryBad: {color: 'very-bad', icon: 'bi-exclamation-octagon-fill'},
  }

  private createGraphSeries(): any {
    return {
      series: [{
        data: this.powerInjectionHistory
      }]
    };
  }

  private updatePowerInjectionHistory(newValue: NamedNumericalValue): void {
    if (this.powerInjectionHistory.length > this.amountOfPowerInjectionHistoryToKeep) {
      this.powerInjectionHistory.shift();
    }
    this.powerInjectionHistory.push(PowerInjectionGraphComponent.formatToGraphElement(newValue));
  }

  private static formatToGraphElement(injectedPower: NamedNumericalValue): any {
    const now = new Date(Date.now());
    return {
      name: PowerInjectionGraphComponent.TimeFormatter().format(now),
      value: [
        now,
        injectedPower.value
      ]
    };
  }

  private static TimeFormatter(): Intl.DateTimeFormat {
    return new Intl.DateTimeFormat("nl-BE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  private configuredOptions(): any {
    return {
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          params = params[0];
          return `${params['name']} | ${params['value'][1]} Kwh`;
        },
        axisPointer: {
          animation: true
        }
      },
      xAxis: {
        type: 'time',
        axisLine: {
          lineStyle: {
            color: 'rgb(255,255,255)',
          }
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgb(255,255,255)',
          }
        },
      },
      series: [{
        name: 'Power Injection',
        type: 'line',
        data: this.powerInjectionHistory,
        areaStyle: {
          color: 'rgba(255,255,255,0.34)'
        },
        lineStyle: {
          color: 'rgb(255,255,255)',
          type: 'solid'
        },
        color: 'rgb(255,255,255)',
        showSymbol: true,
        emphasis: {
          line: true,
        },
        label: {
          show: false,
          position: 'top',
          color: 'rgb(255,255,255)',
        },
      }]
    };
  }
}
