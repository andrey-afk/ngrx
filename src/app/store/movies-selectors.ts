import {createSelector} from '@ngrx/store';
import {FavoriteMovieState, State} from "./movies-reducer";
import {TheMovies} from "../components/models/the-movies.interface";



export interface FavoriteState {
  favoriteMovies: TheMovies[];
}

export interface FavoriteId {
  id: number | undefined;
}


export const selectFavoriteState = (state: AppState) => {
  return  state.favoriteMovies
};

export const selectAllFavorites = createSelector(
  selectFavoriteState,
  (state: FavoriteState) => {
    return state?.favoriteMovies
  }
);

// export const selectIsMovieFavorite = createSelector(
//   selectFavoriteState,
//   (state: FavoriteState, props: FavoriteId) => {
//     return !!state?.favoriteMovies.find((item) => item.id === props.id)
//   }
// );

export const selectIsMovieFavorite = (id: number | undefined) =>
  createSelector(
    selectFavoriteState,
    (state: FavoriteState) => {
      return !!state.favoriteMovies.find(movie => movie.id === id)
    }
  )


export interface AppState {
  movies: State;
  favoriteMovies: FavoriteState;
}

export const selectState = (state: AppState) => {
  return  state.movies
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


