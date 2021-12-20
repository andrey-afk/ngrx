import {createReducer, on, Action} from '@ngrx/store';
import {MoviesResponse} from "../components/models/the-movies.interface";
import {getMovies, getMoviesSuccess} from "./movies-actions";

export interface State {
  movies: MoviesResponse;
  loading: boolean;
}

export const initialState: State = {movies: {page: 1, total_results: 2276}, loading: false,};

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

export function moviesReducer(state: State, action: Action) {
  return _postReducer(state, action);
}
