import { createAction, props } from '@ngrx/store';
import { Todo } from '../../app/models/Todo';

export const todoLoadList = createAction('[todo Component] loadList');

export const todoAdd = createAction('[todo Component] todoAdd', props<{ todo: Todo }>());
export const todoUpdate = createAction('[todo Component] todoUpdate', props<{ id: number, todo: Todo }>());
export const todoLoadListSuccess = createAction('[todo Component] loadListSuccess', props<{ todos: any[] }>());

export const todoLoadListFailure = createAction('[todo Component] loadListFailure', props<{ error: any }>());
