import { createAction, props } from '@ngrx/store';

export const loadSpinner = createAction('[Counter Component] loadSpinner', props<{ isLoad: boolean }>());
