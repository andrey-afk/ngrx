import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map , switchMap} from 'rxjs/operators';
import * as actions from "./movies-actions";
import {MoviesService} from "../components/services/movies.service";
@Injectable()
export class MoviesEffects {

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getMovies.type),
    switchMap(({pageNumber}) => this.moviesService.getMovies(pageNumber).pipe(
      map((results) => {
        return  actions.getMoviesSuccess({movies: results})
      })
    ))
    )
  );
}
