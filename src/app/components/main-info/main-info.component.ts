import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState, selectAllFavorites} from "../../store/movies-selectors";
import {Observable} from "rxjs";
import * as actions from "../../store/movies-actions";
import {TheMovies} from "../models/the-movies.interface";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  public moviesPost$: Observable<TheMovies[] | undefined>
  public moviesPhotoUrl: string = 'http://image.tmdb.org/t/p/w342';

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  public ngOnInit(): void {
    this.moviesPost$ = this.store.select(selectAllFavorites);
  }

  public doUnFavorite(movie: TheMovies): void {
    this.store.dispatch(actions.deleteFavoriteMovie({id: movie.id}));
  }

}
