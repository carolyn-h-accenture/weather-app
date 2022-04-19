import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getWeatherForecast() {
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position)
        },
        (error) => {
          observer.next(error)
        }
      )
     }).pipe(
      map((value: any)=> {
      return new HttpParams()
        .set('lon', value.coords.longitude)
        .set('lat', value.coords.latitude)
        .set('units', 'imperial')
        .set('appid', '73d3cee72322c512646546f162d5afe5')

    }),
      switchMap((values) =>{
        return this.http.get('https://api.openweather.org/data/2.5/forecast/daily', { params: values })
      })
    )
  }
}
