
import { createReducer, on } from '@ngrx/store';
import { initialPostState } from '../state/post.state';
import { postAddFailure, postAddSuccess, postDeleteSuccess, postLoadFailure, postLoadSuccess, postUpdateSuccess } from '../actions/post.action';



export const postReducer = createReducer(initialPostState,
    on(postLoadSuccess, (state, action) => {
        return {
            ...state,
            posts: [...action.posts],
            error: null,
        };
    }),
    on(postLoadFailure, postAddFailure, (state, action) => {
        return {
            ...state,
            posts: [],
            error: action.error.message
        };
    }),
    on(postAddSuccess, (state, action) => {
        return {
            ...state,
            posts: [...state.posts, action.post],
            error: null,
        };
    }),
    // on(postAddFailure, (state, action) => {
    //     return {
    //         ...state,
    //         posts: [],
    //         error: action.error.message
    //     };
    // }),
    on(postUpdateSuccess, (state, action) => {
        return {
            ...state,
            posts: [...state.posts.filter(post => post.id !== action.post.id), action.post],
            error: null,
        };
    }),
    on(postDeleteSuccess, (state, action) => {
        return {
            ...state,
            posts: state.posts.filter(post => post.id !== action.id),
            error: null,
        };
    }),

);