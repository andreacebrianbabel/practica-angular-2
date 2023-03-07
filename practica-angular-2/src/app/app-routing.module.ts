import { ResultsRoutingModule } from './results/results-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', component: DashboardRoutingModule },
  { path: 'dashboard', component: DashboardRoutingModule },
  { path: 'results', component: ResultsRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardRoutingModule, ResultsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
