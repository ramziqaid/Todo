import { Post } from "../../app/models/Post";
export interface PostState {
    posts: Post[];
    error: any;
}

export const initialPostState: PostState = {
    posts: [],
    error: null
};