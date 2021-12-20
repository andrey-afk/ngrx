import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as actions from "../../store/movies-actions";
import {Store} from "@ngrx/store";
import {AppState, selectNextMovie, selectPaginatorInfo} from "../../store/movies-selectors";
import {Observable, Subject} from "rxjs";
import {PaginatorInfo, TheMovies} from "../models/the-movies.interface";
import {pluck, switchMap, take, takeUntil, tap} from "rxjs/operators";
import {selectIsMovieFavorite} from "../../store/favorite-selectors";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public showEbButton: boolean = false;
  public moviePost$: Observable<TheMovies | undefined>
  public moviePhotoUrl: string = 'http://image.tmdb.org/t/p/w342';
  public destroy$ = new Subject();
  public index: number = 0;
  public pageNumber: number | undefined;
  public paginatorInfo$: Observable<PaginatorInfo | undefined>
  private checkFavorite$$ = new Subject<number>();


  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly store: Store<AppState>,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.moviePost$ = this.activatedRoute.data.pipe(pluck('movie'), tap(async (movie) => {
      this.checkFavorite$$.next(movie?.id);
    }));
    this.checkFavorite$$.pipe(
      switchMap(id => this.store.select(selectIsMovieFavorite(id))),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.showEbButton = res
    })
    this.paginatorInfo$ = this.store.select(selectPaginatorInfo);
    this.paginatorInfo$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.pageNumber = res?.page;
    })
  }

  public showNextMovie(): void {
    if (this.index == 18 && this.pageNumber) {
      this.index = 0;
      this.store.dispatch(actions.getMovies({pageNumber: ++this.pageNumber}));
      this.store.select(selectNextMovie(this.index)).pipe(take(1)).subscribe((res) => {
        this.router.navigate([`movies/`, res?.id])
      });
    } else {
      this.store.select(selectNextMovie(++this.index)).pipe(take(1)).subscribe((res) => {
        this.router.navigate([`movies/`, res?.id])
      });
    }
  }

  public addToFavoriteMovie(favoriteMovies: TheMovies): void {
    this.store.dispatch(actions.addToFavoriteMovie({favoriteMovies}))
  }

  public ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
