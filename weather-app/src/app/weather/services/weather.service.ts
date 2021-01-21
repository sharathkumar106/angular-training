import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { WeatherData } from 'src/app/core/models';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    WEATHER_API_KEY = 'd517c07fa8b287260dac66b5dbe90357';
    WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    weatherData: WeatherData;
    dataChanged = new Subject<WeatherData>();

    constructor(
        private http: HttpClient
    ) { }

    getWeatherData(location = 'Mangalore'): Observable<WeatherData> {
        const url = `${this.WEATHER_BASE_URL}${location}&appid=${this.WEATHER_API_KEY}&units=metric`;
        return this.http.get<any>(url).pipe(
            map((res) => {
                return {
                    city: res.name,
                    main: res.main,
                    clouds: res.clouds.all,
                    wind: res.wind.speed,
                    visibility: res.visibility,
                    precipitation: res.precipitation?.value || 0,
                    condition: res.weather[0].main,
                    condition_desc: res.weather[0].description
                };
            }),
            tap(res => {
                this.dataChanged.next(res);
            })
        );
    }
}
