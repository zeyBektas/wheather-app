import { Component, Input } from '@angular/core';
import { WeatherItem } from '../weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css'],
  // inputs: ['weatherItem: item']
})
export class WeatherItemComponent {
  @Input('item') weatherItem: WeatherItem;

}
