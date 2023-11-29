import { Component, OnInit } from '@angular/core';
import { WeatherItem } from '../weather-item';
import { WEATHER_ITEMS } from '../weather.data';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  constructor(private _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherItems = this._weatherService.getWeatherItems();
  }
}
