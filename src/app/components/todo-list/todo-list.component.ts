import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Todo } from './../../models/Todo';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { StoreInterface } from '../../../store/store';
import { selectCounterValue } from '../../../store/selectors/counter.selector';
import { Store } from '@ngrx/store';
import { todoAdd, todoLoadList } from '../../../store/actions/todo.actions';
import { selectTodoList } from '../../../store/selectors/todo.selector';
import { postLoadList } from '../../../store/actions/post.action';
import { loadSpinner } from '../../../store/actions/loadSpinner.action';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],

  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
    trigger('moveFromLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ]),
    trigger('changeSize', [
      transition(':enter', [
        style({ transform: 'scale(1.5)', opacity: 1 }),
        animate('0.5s ease-in', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'scale(1.5)', opacity: 0 }))
      ])
    ]),

  ]
})
export class TodoListComponent implements OnInit {

  todos!: Todo[];
  p: number = 1;
  order: boolean | undefined = undefined;
  constructor(private store: Store<StoreInterface>, private todosService: TodosService) {
    this.store.select(selectTodoList).subscribe(todos => {
      console.log('Todos:', todos);
      this.todos = todos;
    });
  }
  ngOnInit(): void {
    // this.todosService.getTodos().subscribe(todos => { // get todos
    //   this.todos = todos;
    // });
  }

  loadList() {
    this.store.dispatch(loadSpinner({ isLoad: true }));
    this.store.dispatch(postLoadList());
  }
  todoAdd() {
    this.store.dispatch(todoAdd({ todo: { title: 'test', completed: false } }));
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
