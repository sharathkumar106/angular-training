export interface WeatherData {
    city: string;
    country?: string;
    main: Main;
    visibility?: number;
    wind?: number;
    clouds?: number;
    precipitation?: number;
    condition: string;
    condition_desc: string;
}

interface Main {
    temp: number;
    feels_like?: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

