import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
      path: 'todolist',
      loadChildren: () => import('./todolist/todolist.module')
      .then(m => m.TodolistModule)
  },
  {
      path: '**',
      redirectTo: 'todolist',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
