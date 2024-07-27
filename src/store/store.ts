import { ActionReducerMap } from "@ngrx/store";
import { routerReducer, RouterState } from "@ngrx/router-store";
import { counterReducer } from "./reducers/counter.reducer";
import { todoReducer } from "./reducers/todo.reducer";
import { CounterState } from "./state/counter.state";
import { TodoState } from "./state/todo.state";
import { PostState } from "./state/post.state";
import { postReducer } from "./reducers/post.reducer";
import { LoadSpinnerState } from "./state/loadSpinner.state";
import { loadSpinnerReducer } from "./reducers/loadSpinner.reducer";
import { CommentsPostState } from "../app/models/Comment";
import { commentReducer } from "./reducers/comment.reducer";

export interface StoreInterface {
    router: RouterState,
    count: CounterState,
    todo: TodoState,
    post: PostState,
    loadSpinner: LoadSpinnerState,
    comment: CommentsPostState
}

export const StoreReducer: ActionReducerMap<StoreInterface> = {
    router: routerReducer,
    count: counterReducer,
    todo: todoReducer,
    post: postReducer,
    loadSpinner: loadSpinnerReducer,
    comment: commentReducer
}