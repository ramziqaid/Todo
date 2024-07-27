import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { CommentsPostState, CommentsPost } from "../../app/models/Comment";

// export interface CommentState extends EntityState<CommentsPost> {
//     selectedCommentId: string;
// }
export const commentAdapter = createEntityAdapter<CommentsPost>({
    selectId: (comment: CommentsPost) => comment.id,
    sortComparer: (a: CommentsPost, b: CommentsPost) => b.id - a.id
});

export const initialCommentState: CommentsPostState = commentAdapter.getInitialState();