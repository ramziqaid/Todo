import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  todo: Todo = new Todo();


  constructor(private route: ActivatedRoute,
    private router: Router,
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todosService.getTodoById(id).subscribe(
        todo => {
          this.todo = todo;
          console.log('Todo:', this.todo); // Log the retrieved todo
        },
        error => {
          console.error('Error fetching todo:', error);
        }
      );
    } else {
      console.error('No id parameter found in route');
    }
  }


  saveChanges() {
    this.todosService.updateTodo(this.todo);
    this.router.navigate(['/']);
  }
  cancel(): void {
    this.router.navigate(['/']);
  }

}
