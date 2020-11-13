import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // apiKey = '804e05f0';
  // baseURL = 'http://www.omdbapi.com/';

  apiKey = 'adc1f65a2d6a96b2e21b7ad531a74527';
  baseURL = 'http://gateway.marvel.com/v1/public/series';


  constructor(private httpClient: HttpClient) { }

  getMovies(page: number): Observable<any> {
    const url = `${this.baseURL}?apikey=${this.apiKey}&s=John&page=${page}`;
    return this.httpClient.get(url);
  }

  getMovie(id: string): Observable<any> {
    const url = `${this.baseURL}?apikey=${this.apiKey}&i=${id}`;
    return this.httpClient.get(url);
  }

  getMarvelMovies(): Observable<any> {
    const link = `${this.baseURL}?apikey=${this.apiKey}`;
    return this.httpClient.get(link);
  }

  getMarvelMovie(id: string): Observable<any> {
    const link = `${this.baseURL}/${id}?apikey=${this.apiKey}`;
    return this.httpClient.get(link);
  }
}
