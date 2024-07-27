import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../state/todo.state";

const selectTodoState = createFeatureSelector<TodoState>('todo');


export const selectTodoList = createSelector(selectTodoState, state => state.todos);
export const selectTodoLoading = createSelector(selectTodoState, state => state.loading);
