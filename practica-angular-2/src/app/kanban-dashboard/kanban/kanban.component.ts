import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';



interface Priority {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {

  priorities: Priority[] = [
    { value: 'alta-0', viewValue: 'Alta' },
    { value: 'media-1', viewValue: 'Media' },
    { value: 'baja-2', viewValue: 'Baja' },
  ];

  public formSubmitted = false;

  public taskForm = this.fb.group({
    taskName: ['', [Validators.required]],
    taskPriority: ['', [Validators.required]],
    taskEstimatedTime: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder) { }

  createTask() {
    this.formSubmitted = true;

    console.log(this.taskForm.value)

    if (this.taskForm.valid) {
      console.log("Formulario válido")
    } else {
      console.log("Formulario no válido")
    }

  }

  taskContent = this.taskForm.value;


  public board: Board = new Board('Test Board', [
    new Column('TO DO', '21', [{
      name: 'hola',
      priority: 4,
      estimatedTime: 5
    }],
    )
    // ]),
    // new Column('IN PROGRESS', '32', [
    //   'Lorem ipsum',
    //   'foo'
    // ]),
    // new Column('TESTING', '43', [
    //   'Lorem ipsum',
    //   'foo'
    // ]),
    // new Column('DONE', '54', [
    //   'Lorem ipsum',
    //   'foo'
    // ]),
  ]);

  public ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
