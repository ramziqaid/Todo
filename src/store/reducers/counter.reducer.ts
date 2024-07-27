import { createReducer, on } from '@ngrx/store';
import { decrement, increment, incrementCustome, reset } from '../actions/counter.actions';
import { initialCounterState } from '../state/counter.state';


export const counterReducer = createReducer(initialCounterState,
    on(increment, (state) => ({ ...state, value: state.value + 1 })),
    on(decrement, (state) => ({ ...state, value: state.value - 1 })),
    on(incrementCustome, (state, action) => ({ ...state, value: state.value + action.data })),
    on(reset, (state) => ({ ...state, value: 0 })),
);