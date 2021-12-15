import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbAlertModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgbAlertModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {
}
