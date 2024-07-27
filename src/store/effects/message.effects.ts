import { PostsService } from '../../app/services/post.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { EmptyAction, showMessage } from '../actions/message.action';

@Injectable()
export class MessageEffects {
    constructor(private actions$: Actions) { }

    showAlert = createEffect(() => this.actions$.pipe(
        ofType(showMessage),
        map((action) => {
            alert(action.txt);
            return EmptyAction();
        }
        )));
}