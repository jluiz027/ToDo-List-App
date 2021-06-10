import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { TodolistRoutingModule } from './todolist-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [TodolistComponent, DeleteDialogComponent, NewTaskDialogComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxDatatableModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    TodolistRoutingModule,
    MatTooltipModule
  ]
})
export class TodolistModule { }
