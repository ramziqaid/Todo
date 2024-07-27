import { createReducer, on } from '@ngrx/store';
import { initialLoadSpinnerState } from '../state/loadSpinner.state';
import { loadSpinner } from '../actions/loadSpinner.action';



export const loadSpinnerReducer = createReducer(initialLoadSpinnerState,
    on(loadSpinner, (state, action) => {
        return {
            ...state,
            isLoading: action.isLoad
        }
    }
    )
);