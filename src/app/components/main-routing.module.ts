import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainInfoComponent} from "./main-info/main-info.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {MoviesResolver} from "./services/movies.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MainPageComponent,
    // children: [{
    //   path: ':id',
    //   component: MovieDetailsComponent,
    //   resolve: {
    //     movie: MoviesResolver
    //   },
    // }]
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: {
      movie: MoviesResolver
    },
    runGuardsAndResolvers: 'paramsChange',
  },
  {
    path: 'details-info',
    component: MainInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
