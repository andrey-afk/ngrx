import { createAction, props } from '@ngrx/store';
import {MoviesResponse, TheMovies} from "../components/models/the-movies.interface";

export const getMovies = createAction('[Movies Component] Get all Movies', props<{pageNumber: number | undefined}>());
export const getMoviesSuccess = createAction('[Movies Component] Get all Movies Success', props<{ movies: MoviesResponse}>());

export const addToFavoriteMovie = createAction('[Movies Details Component] Add to favorite Movie', props<{favoriteMovies: TheMovies}>());
export const deleteFavoriteMovie = createAction('[Main Info Component] Delete favorite Movie', props<{id: number | undefined}>());

export const getMovieById = createAction('[Movies Details Component] Get Movie By Id Success', props<{id: number}>());

export const goToNextMovie = createAction('[Movies Component] Show Next Movie', props<{index: number}>());
