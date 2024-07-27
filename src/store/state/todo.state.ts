import { Todo } from "../../app/models/Todo";

export interface TodoState {
    todos: Todo[];
    loading: boolean;
}

export const initialTodoState: TodoState = {
    todos: [
        { id: 1, title: 'Todo 1', completed: false, assignee: 'John Doe' },
        { id: 2, title: 'Todo 2', completed: true, assignee: 'Jane Doe' },
        { id: 3, title: 'Todo 3', completed: false, assignee: 'John Doe' }
    ],
    loading: false
};
