import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap, tap, timer} from "rxjs";
import {P1Data} from "./p1-data.model";

@Injectable({
  providedIn: 'root'
})
export class P1MeterApiService {

  constructor(private httpClient: HttpClient) { }

  private readonly httpProtocol = `http`;
  private readonly p1MeterLocalIP = '192.168.1.61';
  private readonly baseUrl = `${this.httpProtocol}://${this.p1MeterLocalIP}`;

  private readonly intervalDurationInMs = 1_000;

  public retrieveData(): Observable<P1Data> {
    return timer(1, this.intervalDurationInMs).pipe(
      switchMap(() => this.httpClient.get<P1RawDataTO>(`${this.baseUrl}/api/v1/data`)),
      map(rawData => P1MeterApiService.mapToData(rawData)));
  }

  private static mapToData(rawData: P1RawDataTO): P1Data {
    return {
      currentInjectedPowerInKwh: {name: 'Injected power (Kwh)', value: rawData.active_power_w / -1_000},
      totalGasInM3: {name: 'Total Gas (m3)', value: rawData.total_gas_m3},
      totalExportedPowerT1InKwh: {name: 'Total exported power T1 (Kwh)', value: rawData.total_power_export_t1_kwh},
      totalExportedPowerT2InKwh: {name: 'Total exported power T2 (Kwh)', value: rawData.total_power_export_t2_kwh},
      totalImportedPowerT1InKwh: {name: 'Total imported power T1 (Kwh)', value: rawData.total_power_import_t1_kwh},
      totalImportedPowerT2InKwh: {name: 'Total imported power T2 (Kwh)', value: rawData.total_power_import_t2_kwh},
      wifiStrength: {name: 'Wifi strength', value: rawData.wifi_strength}
    }
  }

}

/*
 Model for external API.
 Only to be used by the service internally
 */
type P1RawDataTO = Readonly<{
  active_power_l1_w: number;
  active_power_l2_w: number;
  active_power_l3_w: number;
  active_power_w: number;
  gas_timestamp: number;
  meter_model: string;
  smr_version: number;
  total_gas_m3: number;
  total_power_export_t1_kwh: number;
  total_power_export_t2_kwh: number;
  total_power_import_t1_kwh: number;
  total_power_import_t2_kwh: number;
  wifi_ssid: string;
  wifi_strength: number
}>
