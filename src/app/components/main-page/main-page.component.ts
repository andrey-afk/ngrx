import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {PaginatorInfo, TheMovies} from "../models/the-movies.interface";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, selectAllMovies, selectPaginatorInfo} from "../../store/movies-selectors";
import * as actions from "../../store/movies-actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public pageNumber: number = 1;
  public moviesPost$: Observable<TheMovies[] | undefined>
  public paginatorInfo$: Observable<PaginatorInfo | undefined>
  public moviesPhotoUrl: string = 'http://image.tmdb.org/t/p/w342';

  constructor(
    private moviesService: MoviesService,
    private readonly store: Store<AppState>,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.moviesPost$ = this.store.select(selectAllMovies);
    this.paginatorInfo$ = this.store.select(selectPaginatorInfo);
    this.store.dispatch(actions.getMovies({pageNumber: this.pageNumber}));
  }

  public pageChanged(pageNumber: number): void {
    this.store.dispatch(actions.getMovies({pageNumber}));
  }

  public showDetailInfo(movieId: number | undefined): void {
    this.router.navigate(['movies/',`${movieId}`]);
  }

}
