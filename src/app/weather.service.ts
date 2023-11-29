import { Injectable } from "@angular/core";
import { WEATHER_ITEMS } from "./weather.data";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { WeatherItem } from "./weather-item";

@Injectable({providedIn: 'root'})
export class WeatherService {

    constructor(private _http: HttpClient) {}

    getWeatherItems() {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEMS.push(weatherItem);
    }

    clearWeatherItems() {
        WEATHER_ITEMS.splice(0);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=371ba2feb7f63f2f486f579ad9009338&units=metric')
        .pipe(map((response)=> {return response}),
        catchError(<T>(error, result?: T) => {
            console.log(error);
            return of(result as T)
        })
        ); 
    }
}