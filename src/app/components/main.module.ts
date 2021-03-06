import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {MainPageComponent} from "./main-page/main-page.component";
import {MainInfoComponent} from "./main-info/main-info.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MainRoutingModule} from "./main-routing.module";
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainInfoComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
