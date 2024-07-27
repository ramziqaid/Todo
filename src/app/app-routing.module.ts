import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'edit/:id', component: EditModalComponent },
  { path: 'counter', component: MyCounterComponent },
  { path: 'post', component: PostListComponent },
  { path: 'comment', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
