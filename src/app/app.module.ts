import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {NgxEchartsModule} from "ngx-echarts";
import {CurrentPowerInjectionComponent} from './current-power-injection/current-power-injection.component';
import {SentimentalColoringDirective} from './sentimental-coloring.directive';
import { MapToColorAndIconPipe } from './current-power-injection/map-to-color-and-icon.pipe';
import {MapToColorPipe} from "./current-power-injection/map-to-color.pipe";
import {MapToIconPipe} from "./current-power-injection/map-to-icon.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CurrentPowerInjectionComponent,
    SentimentalColoringDirective,
    MapToColorAndIconPipe,
    MapToColorPipe,
    MapToIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
