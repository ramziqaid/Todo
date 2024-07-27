import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoadSpinnerState } from "../state/loadSpinner.state";

const selectLoadSpinnerState = createFeatureSelector<LoadSpinnerState>('loadSpinner');


export const selectLoadSpinner = createSelector(selectLoadSpinnerState, state => state.isLoading); 
