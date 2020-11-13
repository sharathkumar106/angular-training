import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = 'adc1f65a2d6a96b2e21b7ad531a74527';
  baseURL = 'http://gateway.marvel.com/v1/public';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    const link = `${this.baseURL}/series?apikey=${this.apiKey}`;
    return this.httpClient.get(link);
  }

  getCast(id: string): Observable<any> {
    const link = `${this.baseURL}/series/${id}/characters?apikey=${this.apiKey}`;
    return this.httpClient.get(link);
  }

  getCharacters(): Observable<any> {
    const link = `${this.baseURL}/characters?apikey=${this.apiKey}`;
    return this.httpClient.get(link);
  }
}
