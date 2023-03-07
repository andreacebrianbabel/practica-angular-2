import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataResultsComponent } from '../data-results/data-results.component';
import { ResultsRoutingModule } from './results-routing.module';



@NgModule({
  declarations: [
    DataResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResultsRoutingModule
  ],
})
export class ResultsModule { }
