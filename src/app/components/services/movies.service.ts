import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {MoviesResponse} from "../models/the-movies.interface";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getMovies(page: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`http://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&page=${page}`)
  }
}
