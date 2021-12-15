import {createReducer, on, Action} from '@ngrx/store';
import {MoviesResponse, TheMovies} from "../components/models/the-movies.interface";
import {addToFavoriteMovie, deleteFavoriteMovie, getMovies, getMoviesSuccess} from "./movies-actions";

export interface State {
  movies: MoviesResponse;
  loading: boolean;
}

export interface FavoriteMovieState {
  favoriteMovies: TheMovies[];
}

export const initialState: State = {movies: {page: 1, total_results: 2276}, loading: false,};
export const initialFavoriteState: FavoriteMovieState = {favoriteMovies: []};

const _postReducer = createReducer(
  initialState,
  on(getMovies, (state) => ({
    ...state, loading: true
  })),
  on(getMoviesSuccess, (state, action) => {
    return {
      ...state, loading: false, movies: action.movies
    }
  })
);

const _favoriteReducer = createReducer(
  initialFavoriteState,
  on(addToFavoriteMovie, (state, action) => {
    return {
      ...state, favoriteMovies: [...state.favoriteMovies, action.favoriteMovies]
    }
  }),
  on(deleteFavoriteMovie, (state, action) => {
    return {
      ...state, favoriteMovies: state.favoriteMovies.filter(el => el.id !== action.id)
    }
  })
);

export function favoriteReducer(state: FavoriteMovieState, action: Action) {
  return _favoriteReducer(state, action);
}

export function moviesReducer(state: State, action: Action) {
  return _postReducer(state, action);
}



