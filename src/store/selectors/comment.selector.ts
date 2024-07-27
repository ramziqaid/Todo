
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommentsPostState } from "../../app/models/Comment";
import { commentAdapter } from "../state/comment.state";

const selectCommentState = createFeatureSelector<CommentsPostState>('comment');
const selectCommentAdapter = commentAdapter.getSelectors();

export const selectCommentList = createSelector(selectCommentState, selectCommentAdapter.selectAll);
export const selectCommentselectEntities = createSelector(selectCommentState, selectCommentAdapter.selectEntities);
export const selectCommentselectIds = createSelector(selectCommentState, selectCommentAdapter.selectIds);
export const selectCommentselectTotal = createSelector(selectCommentState, selectCommentAdapter.selectTotal); 
