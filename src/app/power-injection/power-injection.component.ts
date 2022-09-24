import {Component, Input} from '@angular/core';
import {NamedNumericalValue} from "../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-power-injection',
  templateUrl: './power-injection.component.html',
  styleUrls: ['./power-injection.component.scss']
})
export class PowerInjectionComponent {

  @Input() powerInjection!: NamedNumericalValue

  readonly powerInjectionScale = {
    veryPositive: {color: 'very-positive', icon: 'bi-chevron-double-up'},
    positive: {color: 'positive', icon: 'bi-chevron-up'},
    negative: {color: 'negative', icon: 'bi-chevron-down'},
    veryNegative: {color: 'very-negative', icon: 'bi-chevron-double-down'},
    extremelyNegative: {color: 'extremely-negative', icon: 'bi-exclamation-octagon-fill'},
  }
}

