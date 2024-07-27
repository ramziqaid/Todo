import { createAction, props } from '@ngrx/store';
import { Post } from '../../app/models/Post';

export const postLoadList = createAction('[todo Component] postLoadList');
export const postAdd = createAction('[todo Component] postAdd', props<{ post: Post }>());
export const postUpdate = createAction('[todo Component] postUpdate', props<{ id: number, post: Post }>());
export const postDelete = createAction('[todo Component] postDelete', props<{ id: number }>());

export const postLoadSuccess = createAction('[todo Component] postLoadSuccess', props<{ posts: Post[] }>());
export const postLoadFailure = createAction('[todo Component] postLoadFailure', props<{ error: any }>());

export const postAddSuccess = createAction('[todo Component] postAddSuccess', props<{ post: Post }>());
export const postAddFailure = createAction('[todo Component] postAddFailure', props<{ error: any }>());

export const postUpdateSuccess = createAction('[todo Component] postUPdateSuccess', props<{ post: Post }>());
export const postUpdateFailure = createAction('[todo Component] postUPdateFailure', props<{ error: any }>());

export const postDeleteSuccess = createAction('[todo Component] postDeleteSuccess', props<{ id: number }>());
export const postDeleteFailure = createAction('[todo Component] postDeleteFailure', props<{ error: any }>());
