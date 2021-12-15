import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main.module').then(
        (m) => m.MainModule
      ),
  }
  // {
  //   path: '',
  //   component: HeaderComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       loadChildren: () =>
  //         import('./components/main.module').then((m) => m.MainModule)
  //     }]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
