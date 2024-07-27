import { PostsService } from './../../app/services/post.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { postAdd, postAddFailure, postAddSuccess, postDelete, postDeleteFailure, postDeleteSuccess, postLoadFailure, postLoadList, postLoadSuccess, postUpdate, postUpdateFailure, postUpdateSuccess } from '../actions/post.action';
import { showMessage } from '../actions/message.action';
import { loadSpinner } from '../actions/loadSpinner.action';

@Injectable()
export class PostEffects {
    constructor(private actions$: Actions, private postsService: PostsService) { }

    postLoadEffect = createEffect(() => this.actions$.pipe(
        ofType(postLoadList),
        switchMap((e) =>
            this.postsService.getPosts().pipe(
                switchMap((data) => of(
                    postLoadSuccess({ posts: data }),
                    loadSpinner({ isLoad: false })
                )),
                catchError(error => of(
                    postLoadFailure({ error }),
                    loadSpinner({ isLoad: false })))
            )
        )));

    postAddEffect = createEffect(() => this.actions$.pipe(
        ofType(postAdd),
        switchMap((action) => this.postsService.addPost(action.post).pipe(
            switchMap((data) => of(
                postAddSuccess({ post: action.post }),
                showMessage({ txt: 'Post added successfully' })
            )),
            catchError(error => of(postAddFailure({ error })))
        ))));

    postUpdateEffect = createEffect(() => this.actions$.pipe(
        ofType(postUpdate),
        switchMap((action) => this.postsService.updatePost(action.post).pipe(
            map((data) => postUpdateSuccess({ post: action.post })),
            catchError(error => of(postUpdateFailure({ error })))
        ))));

    postDeleteEffect = createEffect(() => this.actions$.pipe(
        ofType(postDelete),
        switchMap((action) => this.postsService.deletePost(action.id).pipe(
            map(() => postDeleteSuccess({ id: action.id })),
            catchError(error => of(postDeleteFailure({ error })))
        ))));

}