import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }

  getWeatherForecast() {
    return new Observable
  }
}
