import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  timeline: any = [];

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getWeatherForecast().subscribe(data=>{
      console.log(data);
      this.getTodaysForecast(data)
    })
  }

  getTodaysForecast(today: any){
    for (const forecast of today.list.slice(0,8) ) {
      console.log(forecast);
      this.timeline.push({
        time:  forecast.dt_txt,
        temp: forecast.main.temp
      });

      const apiDate = new Date(forecast.dt_txt).getTime();


    }

  }

}
