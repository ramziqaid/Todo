import { createAction, props } from '@ngrx/store';
import { CommentsPost } from '../../app/models/Comment';

export const loadCommnets = createAction('[Counter Component] loadCommnets');
export const loadCommnetsSuccess = createAction('[Counter Component] loadCommnetsSuccess', props<{ comment: CommentsPost[] }>());
export const loadCommnetsFaild = createAction('[Counter Component] loadCommnetsFaild', props<{ error: string }>());


export const addCommnets = createAction('[Counter Component] addCommnets');
export const addCommnetsSuccess = createAction('[Counter Component] addCommnetsSuccess', props<{ comment: CommentsPost }>());
export const addCommnetsFaild = createAction('[Counter Component] addCommnetsFaild', props<{ error: string }>());
