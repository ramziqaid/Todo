import { createReducer, on } from '@ngrx/store';
import { initialMessageState } from '../state/message.state';
import { showMessage } from '../actions/message.action';

export const counterReducer = createReducer(initialMessageState,
    on(showMessage, (state, action) => ({ ...state, txt: action.txt }))
);