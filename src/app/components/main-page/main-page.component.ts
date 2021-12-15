import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {PaginatorInfo, TheMovies} from "../models/the-movies.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {
  AppState,
  selectAllMovies,
  selectIsMovieFavorite,
  selectPaginatorInfo
} from "../../store/movies-selectors";
import * as actions from "../../store/movies-actions";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public showDetailInfo: boolean = false;
  public showFavoriteButton: boolean = false;
  public pageNumber: number = 1;
  public index: number;
  public theMovie: TheMovies | undefined;
  public moviesPost$: Observable<TheMovies[] | undefined>
  public isMovieFavorite: Observable<boolean | undefined>
  public paginatorInfo$: Observable<PaginatorInfo | undefined>
  public moviesPhotoUrl: string = 'http://image.tmdb.org/t/p/w342';

  constructor(
    private moviesService: MoviesService,
    private readonly store: Store<AppState>,
  ) {

  }

  public ngOnInit(): void {
    this.moviesPost$ = this.store.select(selectAllMovies);
    this.paginatorInfo$ = this.store.select(selectPaginatorInfo);
    this.store.dispatch(actions.getMovies({pageNumber: this.pageNumber}));
    // this.isMovieFavorite = this.store.select(selectIsMovieFavorite,{id: this.theMovie?.id});
    // console.log(this.isMovieFavorite)
  }

  public pageChanged(pageNumber: number): void {
    this.store.dispatch(actions.getMovies({pageNumber}));
  }

  public showDetailWindow(movie: TheMovies, index: number): void {
    this.theMovie = movie;
    this.index = index
    this.showDetailInfo = true;
  }

  public closeDetailInfo(): void {
    this.showDetailInfo = false;
  }

  public addToFavoriteMovie(favoriteMovies: TheMovies): void {
    this.store.dispatch(actions.addToFavoriteMovie({favoriteMovies}))
    this.store.select(selectIsMovieFavorite(this.theMovie?.id)).subscribe((res) => {
      console.log(res)
      this.showFavoriteButton = res;
    });
  }

  showNextMovie() {
    this.store.dispatch(actions.goToNextMovie({index: this.index++}));
    this.moviesPost$.pipe(
      tap((res) => {
        this.theMovie = res?.find((item, index) => {
          if (this.index + 1 == index) {
            return true
          }
          return
        })
      })
    ).subscribe()
  }

}
