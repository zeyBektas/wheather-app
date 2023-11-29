import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { WeatherItem } from '../weather-item';
import { Subject, switchMap, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};

  constructor(private _weatherService: WeatherService) {}

  onSubmit() {
    const weatherItem = new WeatherItem(this.data.name, this.data.weather[0].description, this.data.main.temp);
    this._weatherService.addWeatherItem(weatherItem);
  }

  onSearchLocation(cityName: string) {
    this.searchStream
    .next(cityName);
  }

  ngOnInit(): void {
    this.searchStream
    .pipe(debounceTime(300),
    distinctUntilChanged(),
    switchMap((input:string) => this._weatherService.searchWeatherData(input)))
    .subscribe( data => {
      this.data = data;
    })
  }
}
