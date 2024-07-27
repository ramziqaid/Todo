import { PostsService } from './../../app/services/post.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { loadSpinner } from '../actions/loadSpinner.action';
import { addCommnets, loadCommnets, loadCommnetsFaild, loadCommnetsSuccess } from '../actions/comment.action';

@Injectable()
export class CommentEffects {
    constructor(private actions$: Actions, private commentService: PostsService) { }

    commonLoadEffect = createEffect(() => this.actions$.pipe(
        ofType(loadCommnets),
        switchMap((e) =>
            this.commentService.getPostComment().pipe(
                switchMap((data) => of(
                    loadCommnetsSuccess({ comment: data }),
                    loadSpinner({ isLoad: false })
                )),
                catchError(error => of(
                    loadCommnetsFaild({ error }),
                    loadSpinner({ isLoad: false })))
            )
        )));

    // commentAddEffect = createEffect(() => this.actions$.pipe(
    //     ofType(addCommnets),
    //     switchMap((action) => this.postsService.addPost(action.da).pipe(
    //         switchMap((data) => of(
    //             postAddSuccess({ post: action.post }),
    //             showMessage({ txt: 'Post added successfully' })
    //         )),
    //         catchError(error => of(postAddFailure({ error })))
    //     ))));

    // postUpdateEffect = createEffect(() => this.actions$.pipe(
    //     ofType(postUpdate),
    //     switchMap((action) => this.postsService.updatePost(action.post).pipe(
    //         map((data) => postUpdateSuccess({ post: action.post })),
    //         catchError(error => of(postUpdateFailure({ error })))
    //     ))));

    // postDeleteEffect = createEffect(() => this.actions$.pipe(
    //     ofType(postDelete),
    //     switchMap((action) => this.postsService.deletePost(action.id).pipe(
    //         map(() => postDeleteSuccess({ id: action.id })),
    //         catchError(error => of(postDeleteFailure({ error })))
    //     ))));

}