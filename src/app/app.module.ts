import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {NgxEchartsModule} from "ngx-echarts";
import {PowerInjectionComponent} from './power-injection/power-injection.component';
import {SentimentalColoringDirective} from './sentimental-coloring.directive';
import { MapToColorAndIconPipe } from './power-injection/map-to-color-and-icon.pipe';
import {MapToColorPipe} from "./power-injection/map-to-color.pipe";
import {MapToIconPipe} from "./power-injection/map-to-icon.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PowerInjectionComponent,
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
