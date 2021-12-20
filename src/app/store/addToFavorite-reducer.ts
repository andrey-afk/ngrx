import {TheMovies} from "../components/models/the-movies.interface";
import {addToFavoriteMovie, deleteFavoriteMovie} from "./movies-actions";
import {Action, createReducer, on} from "@ngrx/store";

export interface FavoriteState {
  favoriteMovies: TheMovies[];
}

export const initialFavoriteState: FavoriteState = {favoriteMovies: []};

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
  }),
);

export function favoriteReducer(state: FavoriteState, action: Action) {
  return _favoriteReducer(state, action);
}
