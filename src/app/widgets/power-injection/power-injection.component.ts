import {Component, Input} from '@angular/core';
import {NamedNumericalValue} from "../../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-widget-power-injection',
  templateUrl: './power-injection.component.html',
  styleUrls: ['./power-injection.component.scss']
})
export class PowerInjectionComponent {

  @Input() powerInjection!: NamedNumericalValue

  readonly powerInjectionScale = {
    veryGood: {color: 'very-good', icon: 'bi-chevron-double-up'},
    good: {color: 'good', icon: 'bi-chevron-up'},
    neutral: {color: 'neutral', icon: 'bi-chevron-down'},
    bad: {color: 'bad', icon: 'bi-chevron-double-down'},
    veryBad: {color: 'very-bad', icon: 'bi-exclamation-octagon-fill'},
  }
}

