import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'edit/:id', component: EditModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
