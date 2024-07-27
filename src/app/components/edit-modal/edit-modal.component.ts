import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Todo } from './../../models/Todo';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
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
    trigger('inputFieldAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
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
