import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import { TaskData } from '../taskdata.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean;
  selected = [];
  editing = {};
  newTaskData: TaskData;
  reason = '';
  count = 0;

  rows = [];
  columns = [{ prop: 'title' }, { name: 'description' }];


  constructor(public dialog: MatDialog) {}

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openAddNewTaskDialog(): void {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      width: '250px',
      data: {description: "", title: "", id: this.count++}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.newTaskData = result;
        console.log(result)
        this.addNewTask(result);
      }
      
    });
  }

  openDeleteTaskDialog(task: TaskData): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: {description: "", title: task.title, id: task.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.deleteTask(task.id);
      }
      
    });
  }

  addNewTask(newTask: TaskData){
    console.log(`Adding:  ${newTask.title}`)
    this.rows.push(newTask)
    this.rows = [...this.rows];
    console.log(this.rows)
  }


  
  deleteTask(id){
    console.log(id)
    let deleted = `${id}`;
    this.rows = this.rows.filter(i => i.id != deleted)
    console.log(`Deleting:  ${deleted}`)
    console.log(this.rows)
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
