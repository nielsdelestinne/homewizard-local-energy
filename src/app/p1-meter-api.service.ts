import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap, tap, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class P1MeterApiService {

  constructor(private httpClient: HttpClient) { }

  public retrieveData(): Observable<any> {
    return timer(1, 1000).pipe(
      tap(second => console.log(`Amount of polling: ${second}`)),
      switchMap(() => this.httpClient.get('http://192.168.1.61/api/v1/data'))
    );
  }
}
