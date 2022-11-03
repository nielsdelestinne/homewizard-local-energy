import {discardPeriodicTasks, fakeAsync, flush, flushMicrotasks, TestBed, tick} from "@angular/core/testing";
import {P1MeterApiService} from "./p1-meter-api.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Unit} from "./p1-data.model";
import {async} from "rxjs";

describe('P1MeterApiService', () => {

  let p1MeterServiceAPI: P1MeterApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    p1MeterServiceAPI = TestBed.inject(P1MeterApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  test(`should be created`, (() => {
    expect(p1MeterServiceAPI).toBeTruthy();
  }));

  test(`should return the mapped data points on retrieveDate()`, fakeAsync(() => {
    let actualData = {};

    // When
    p1MeterServiceAPI.retrieveData().subscribe(actual => actualData = actual);
    tick(1);

    // Given
    mockApiV1Data(mockedRawP1Data);

    // Then
    expect(actualData).toEqual({
      injectedPower: {name: 'Injected power', value: 88 / -1_000, unit: Unit.Kwh},
      totalGasInM3: {name: 'Total Gas', value: 25, unit: Unit.m3},
      totalExportedPowerT1: {name: 'Total exported power T1', value: 10, unit: Unit.Kwh},
      totalExportedPowerT2: {name: 'Total exported power T2', value: 11, unit: Unit.Kwh},
      totalImportedPowerT1: {name: 'Total imported power T1', value: 15, unit: Unit.Kwh},
      totalImportedPowerT2: {name: 'Total imported power T2', value: 16, unit: Unit.Kwh},
      wifiStrength: {name: 'Wifi strength', value: 70, unit: Unit.percentage}
    })

    discardPeriodicTasks();
  }));

  test(`should deal with optional data points on retrieveDate() and map to default values instead`, fakeAsync(() => {

    let actualData = {};

    // When
    p1MeterServiceAPI.retrieveData().subscribe(actual => actualData = actual);
    tick(1);

    // Given
    mockApiV1Data(mockedRawP1DataCompletelyAllFieldsMissing);

    // Then
    expect(actualData).toEqual({
      injectedPower: {name: 'Injected power', value: 0 / -1_000, unit: Unit.Kwh},
      totalGasInM3: {name: 'Total Gas', value: 0, unit: Unit.m3},
      totalExportedPowerT1: {name: 'Total exported power T1', value: 0, unit: Unit.Kwh},
      totalExportedPowerT2: {name: 'Total exported power T2', value: 0, unit: Unit.Kwh},
      totalImportedPowerT1: {name: 'Total imported power T1', value: 0, unit: Unit.Kwh},
      totalImportedPowerT2: {name: 'Total imported power T2', value: 0, unit: Unit.Kwh},
      wifiStrength: {name: 'Wifi strength', value: 0, unit: Unit.percentage}
    })

    discardPeriodicTasks();
  }));

  function mockApiV1Data(mockedData: any) {
    const mockedHttpRequest = httpMock.expectOne(request => request.url.endsWith(`/api/v1/data`));
    mockedHttpRequest.flush(mockedData);
  }

  const mockedRawP1Data = {
    active_power_l1_w: 10,
    active_power_l2_w: 10,
    active_power_l3_w: 10,
    active_power_w: 88,
    gas_timestamp: 10,
    meter_model: 'P1',
    smr_version: 10,
    total_gas_m3: 25,
    total_power_export_t1_kwh: 10,
    total_power_export_t2_kwh: 11,
    total_power_import_t1_kwh: 15,
    total_power_import_t2_kwh: 16,
    wifi_ssid: 'Wifidx',
    wifi_strength: 70
  }

  const mockedRawP1DataCompletelyAllFieldsMissing = {}

})



