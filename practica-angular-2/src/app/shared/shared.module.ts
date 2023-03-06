import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    TableComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
