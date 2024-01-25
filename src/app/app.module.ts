import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GridOfEmployeesComponent} from "./grid-of-employees/grid-of-employees.component";
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { ViewTypeComponent } from './view-type/view-type.component';

@NgModule({
  declarations: [
    AppComponent,
    GridOfEmployeesComponent,
    ToolBarComponent,
    ListOfEmployeesComponent,
    ViewTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
