import {Component} from '@angular/core';
import {P1MeterApiService} from "./p1-meter-api/p1-meter-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public data$ = this.p1MeterApiService.retrieveData();

  constructor(private p1MeterApiService: P1MeterApiService) {
  }

}
