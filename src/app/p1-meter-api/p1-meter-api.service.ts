import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap, timer} from "rxjs";
import {P1Data, Unit} from "./p1-data.model";
import {SettingsService} from "../settings/settings.service";

@Injectable({
  providedIn: 'root'
})
export class P1MeterApiService {

  constructor(private httpClient: HttpClient, private settingsService: SettingsService) { }

  private readonly httpProtocol = `http`;
  private readonly p1MeterLocalIP = this.settingsService.settings().localApiIP;
  private readonly baseUrl = `${this.httpProtocol}://${this.p1MeterLocalIP}`;

  private readonly intervalDurationInMs = 1_000;

  public retrieveData(): Observable<P1Data> {
    return timer(1, this.intervalDurationInMs).pipe(
      switchMap(() => this.httpClient.get<P1RawDataTO>(`${this.baseUrl}/api/v1/data`)),
      map(rawData => P1MeterApiService.mapToData(rawData)));
  }

  private static mapToData(rawData: P1RawDataTO): P1Data {
    return {
      injectedPower: {name: 'Injected power', value: (rawData.active_power_w || 0) / -1_000, unit: Unit.kWh},
      totalGasInM3: {name: 'Total Gas', value: rawData.total_gas_m3 || 0, unit: Unit.m3},
      totalExportedPowerT1: {name: 'Total exported power T1', value: rawData.total_power_export_t1_kWh || 0, unit: Unit.kWh},
      totalExportedPowerT2: {name: 'Total exported power T2', value: rawData.total_power_export_t2_kWh || 0, unit: Unit.kWh},
      totalImportedPowerT1: {name: 'Total imported power T1', value: rawData.total_power_import_t1_kWh || 0, unit: Unit.kWh},
      totalImportedPowerT2: {name: 'Total imported power T2', value: rawData.total_power_import_t2_kWh || 0, unit: Unit.kWh},
      wifiStrength: {name: 'Wifi strength', value: rawData.wifi_strength || 0, unit: Unit.percentage}
    }
  }

}

/*
 Model for external API.
 Only to be used by the service internally
 */
type P1RawDataTO = Readonly<{
  active_power_l1_w?: number;
  active_power_l2_w?: number;
  active_power_l3_w?: number;
  active_power_w?: number;
  gas_timestamp?: number;
  meter_model?: string;
  smr_version?: number;
  total_gas_m3?: number;
  total_power_export_t1_kWh?: number;
  total_power_export_t2_kWh?: number;
  total_power_import_t1_kWh?: number;
  total_power_import_t2_kWh?: number;
  wifi_ssid?: string;
  wifi_strength?: number
}>
