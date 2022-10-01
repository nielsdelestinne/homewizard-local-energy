import {Component} from '@angular/core';
import {P1MeterApiService} from "./p1-meter-api/p1-meter-api.service";
import {SettingsService} from "./settings/settings.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  apiError!: Error;

  data$ = this.p1MeterApiService.retrieveData()
    .pipe(catchError(error => {
      this.apiError = error;
      return throwError(error);
    }));

  constructor(private p1MeterApiService: P1MeterApiService, public settingsService: SettingsService) {
  }

  refresh() {
    window.location.reload()
  }
}
