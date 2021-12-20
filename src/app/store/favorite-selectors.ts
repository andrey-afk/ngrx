import {createSelector} from "@ngrx/store";
import {FavoriteState} from "./addToFavorite-reducer";
import {AppState} from "./movies-selectors";

export const selectFavoriteState: (state: AppState) => FavoriteState = (state: AppState) => {
  return state.favoriteMovies
};

export const selectAllFavorites = createSelector(
  selectFavoriteState,
  (state: FavoriteState) => {
    return state?.favoriteMovies
  }
);

export const selectIsMovieFavorite = (id: number | undefined) =>
  createSelector(
    selectFavoriteState,
    (state: FavoriteState) => {
      return !!state.favoriteMovies.find((movie, i) => movie.id === id)
    }
  )

