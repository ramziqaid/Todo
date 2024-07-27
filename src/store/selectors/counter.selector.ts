import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../state/counter.state";

const selectCounterState = createFeatureSelector<CounterState>('count');


export const selectCounterValue = createSelector(selectCounterState, state => state.value);
export const selectCounterName = createSelector(selectCounterState, state => state.name);
