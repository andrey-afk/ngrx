export interface MoviesResponse {
  dates?: MinMaxDates
  page?: number;
  results?: TheMovies[];
  total_pages?: number;
  total_results?: number;
}

export interface MinMaxDates {
  minimum: string;
  maximum: string;
}

export interface TheMovies {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface PaginatorInfo {
  page?: number;
  totalResults?: number;
}
