import { createAction, props } from '@ngrx/store';
import {MoviesResponse, TheMovies} from "../components/models/the-movies.interface";

export const getMovies = createAction('[Movies Component] Get all Movies', props<{pageNumber: number}>());
export const getMoviesSuccess = createAction('[Movies Component] Get all Movies Success', props<{ movies: MoviesResponse}>());

export const addToFavoriteMovie = createAction('[Movies Component] Add to favorite Movie', props<{favoriteMovies: TheMovies}>());
export const deleteFavoriteMovie = createAction('[Movies Component] Delete favorite Movie', props<{id: number | undefined}>());

export const goToNextMovie = createAction('[Movies Component] Show Next Movie', props<{index: number}>());
