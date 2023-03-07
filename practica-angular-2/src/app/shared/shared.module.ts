import { MatFormFieldModule } from '@angular/material/form-field';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    RouterLink
  ],
  exports: [
    LoginComponent,
    TableComponent,
    PaginatorComponent
  ]
})
export class SharedModule { }
