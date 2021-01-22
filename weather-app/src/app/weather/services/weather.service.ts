import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { WeatherData } from 'src/app/core/models';
import { GeolocationService } from '@ng-web-apis/geolocation';

interface Coords {
    lat: number;
    long: number;
}

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    WEATHER_API_KEY = 'd517c07fa8b287260dac66b5dbe90357';
    WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    defaultLocation: Coords;
    weatherData: WeatherData;
    dataChanged = new Subject<WeatherData>();

    constructor(
        private http: HttpClient,
        private readonly geolocation$: GeolocationService
    ) {
        // this.geolocation$.subscribe(position => {
        //     this.defaultLocation = { lat: position.coords.latitude, long: position.coords.longitude };
        //     console.table(this.defaultLocation);
        // });
    }

    getWeatherData(location = 'Mangalore'): Observable<WeatherData> {

        const url = `${this.WEATHER_BASE_URL}q=${location}&appid=${this.WEATHER_API_KEY}&units=metric&lang=en`;

        return this.http.get<any>(url).pipe(
            map((res) => {
                return {
                    city: res.name,
                    country: res.sys.country,
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
