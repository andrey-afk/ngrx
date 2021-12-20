import {createSelector} from '@ngrx/store';
import {State} from "./movies-reducer";
import {FavoriteState} from "./addToFavorite-reducer";

export interface AppState {
  movies: State;
  favoriteMovies: FavoriteState;
}

export const selectState: (state: AppState) => State = (state: AppState) => {
  return state.movies
};

export const selectAllMovies = createSelector(
  selectState,
  (state: State) => {
    return state?.movies.results
  }
);

export const selectPaginatorInfo = createSelector(
  selectState,
  (state: State) => {
    return {
      page: state?.movies.page,
      totalResults: state?.movies.total_results
    }
  }
);

export const selectMovieById = (id: number | undefined) =>createSelector(
  selectState,
  (state: State) =>
    state?.movies.results?.find(movie => movie.id === id)

);

export const selectNextMovie = (index: number) =>createSelector(
  selectState,
  (state: State) => {
    return state?.movies.results?.find((movie, i) => {
      if (index == i) {
        return movie
      }
      return
    })
  }
);
