import { Todo } from './../../models/Todo';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos!: Todo[];
  p: number = 1;
  order: boolean | undefined = undefined; // Initialize status as undefined 

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(todos => { // get todos
      this.todos = todos;

    });
  }

  sortAscending(todos: Todo[]) {
    todos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1)
  }

  sortDescending(todos: Todo[]) {
    todos.sort((a, b) => (a.completed === b.completed) ? 0 : a.completed ? -1 : 1)
  }

  // control order status and sort todos array according to its value
  setStatus() {
    if (this.order === false || undefined) {
      this.order = true;
      this.sortAscending(this.todos)
    } else {
      this.order = false;
      this.sortDescending(this.todos);
    }
  }


  updateTodos(todo: Todo) {
    const index = this.todos.findIndex((i) => i.id === todo.id);
    this.todos[index] = {
      ...todo
    };

    // Sort updated todos if necessary (order !== undefined)
    this.order === true ? this.sortAscending(this.todos) : this.order === false ? this.sortDescending(this.todos) : '';
  }


  deleteTodo(todo: Todo) {
    // Delete from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Delete from server
    this.todosService.deleteTodo(todo).subscribe();

  }

}
