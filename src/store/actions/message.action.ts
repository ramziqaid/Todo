import { createAction, props } from '@ngrx/store';


export const showMessage = createAction('[todo Component] showMessage', props<{ txt: string }>());
export const EmptyAction = createAction('[todo Component] EmptyAction'); 
