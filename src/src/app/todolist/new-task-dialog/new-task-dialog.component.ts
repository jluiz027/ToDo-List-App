import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TaskData } from '../taskdata.model';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss']
})
export class NewTaskDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
