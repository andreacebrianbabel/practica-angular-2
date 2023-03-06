import { TaskCardComponent } from './task-card/task-card.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { KanbanComponent } from './kanban/kanban.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    KanbanComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class KanbanDashboardModule { }
