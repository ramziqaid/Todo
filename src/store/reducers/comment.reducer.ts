import { createReducer, on } from '@ngrx/store';
import { commentAdapter, initialCommentState } from '../state/comment.state';
import { loadCommnetsFaild, loadCommnetsSuccess } from '../actions/comment.action';


export const commentReducer = createReducer(initialCommentState,
    on(loadCommnetsSuccess,
        (state, action) => {
            debugger
            return commentAdapter.setAll(action.comment, state)
        }),
    on(loadCommnetsFaild,
        (state, action) => {
            return {
                ...state,
                error: action.error
            }
        }),
);