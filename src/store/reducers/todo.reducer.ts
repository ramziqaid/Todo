
import { createReducer, on } from '@ngrx/store';
import { todoAdd, todoLoadList, todoUpdate } from '../actions/todo.actions';
import { initialTodoState } from '../state/todo.state';



export const todoReducer = createReducer(initialTodoState,
    on(todoLoadList, (state) => ({ ...state, todo: state })),
    on(todoAdd,
        (state, action) => {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }),
    on(todoUpdate,
        (state, action) => {
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.todo.id ? action.todo : todo
            );
            return { ...state, todos: updatedTodos };
        })

);