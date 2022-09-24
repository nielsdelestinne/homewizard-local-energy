import {Component, Input, OnInit} from '@angular/core';
import {NamedNumericalValue} from "../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-wifi-strength',
  templateUrl: './wifi-strength.component.html',
  styleUrls: ['./wifi-strength.component.scss']
})
export class WifiStrengthComponent {

  @Input() wifiStrength!: NamedNumericalValue

  readonly wifiStrengthScale = {
    veryGood: {color: 'very-good', icon: 'bi-reception-4'},
    good: {color: 'good', icon: 'bi-reception-3'},
    neutral: {color: 'neutral', icon: 'bi-reception-2'},
    bad: {color: 'bad', icon: 'bi-reception-1'},
    veryBad: {color: 'very-bad', icon: 'bi-reception-0'},
  }

}
