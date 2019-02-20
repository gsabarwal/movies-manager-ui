import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Movie} from "../model/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8888/movie';

  getMovies() {
    return this.http.get<Movie[]>(this.baseUrl);
  }
}
