import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "../state/post.state";

const selectPostState = createFeatureSelector<PostState>('post');


export const selectPosts = createSelector(selectPostState, (state) => {
    return state;
});
