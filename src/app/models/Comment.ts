import { EntityState } from "@ngrx/entity"
export interface CommentsPost {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface CommentsPostState extends EntityState<CommentsPost> {

}
