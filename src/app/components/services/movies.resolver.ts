import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {TheMovies} from "../models/the-movies.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, selectMovieById} from "../../store/movies-selectors";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<TheMovies | undefined> {
  constructor(private readonly store: Store<AppState>,) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<TheMovies | undefined> {
    const { id } = route.params;
    return this.store.select(selectMovieById(+id)).pipe(first());
  }
}
