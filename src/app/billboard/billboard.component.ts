import {Component, Input, OnInit} from '@angular/core';
import {Billboard} from "./billboard.model";
import {NamedValue} from "../p1-meter-api/p1-data.model";

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  @Input() billboardDate!: NamedValue<number | string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}

