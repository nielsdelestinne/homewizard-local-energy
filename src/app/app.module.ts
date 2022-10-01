import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxEchartsModule} from "ngx-echarts";
import {PowerInjectionComponent} from './power-injection/power-injection.component';
import {ToScaleElementUsingCurrentPowerPipe} from './power-injection/to-scale-element-using-current-power.pipe';
import {MapToColorPipe} from "./shared/scale/map-to-color.pipe";
import {MapToIconPipe} from "./shared/scale/map-to-icon.pipe";
import {WifiStrengthComponent} from './wifi-strength/wifi-strength.component';
import {ToScaleElementUsingWifiStrengthPipe} from "./wifi-strength/to-scale-element-using-wifi-strength.pipe";
import {PowerInjectionGraphComponent} from './power-injection-graph/power-injection-graph.component';
import {TotalPowerComponent} from './total-power/total-power.component';
import {SettingsComponent} from './settings/settings.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PowerInjectionComponent,
    ToScaleElementUsingCurrentPowerPipe,
    ToScaleElementUsingWifiStrengthPipe,
    MapToColorPipe,
    MapToIconPipe,
    WifiStrengthComponent,
    PowerInjectionGraphComponent,
    TotalPowerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
