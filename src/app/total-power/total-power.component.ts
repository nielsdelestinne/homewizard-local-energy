import {Component, Input, OnInit} from '@angular/core';
import {NamedNumericalValue} from "../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-total-power',
  templateUrl: './total-power.component.html',
  styleUrls: ['./total-power.component.scss']
})
export class TotalPowerComponent {

  @Input() title!: string;
  @Input() theme!: 'imported' | 'exported'
  @Input() totalPowerT1!: NamedNumericalValue;
  @Input() totalPowerT2!: NamedNumericalValue;

}
