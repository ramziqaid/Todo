import { Component, OnInit } from '@angular/core';
import { CommentsPost } from '../../models/Comment';
import { StoreInterface } from '../../../store/store';
import { Store } from '@ngrx/store';
import { selectCommentList } from '../../../store/selectors/comment.selector';
import { loadCommnets } from '../../../store/actions/comment.action';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: CommentsPost[] = [];
  error: string = '';
  constructor(private store: Store<StoreInterface>) { }

  ngOnInit() {
    this.store.dispatch(loadCommnets());
    this.store.select(selectCommentList).subscribe(data => {
      this.comment = data;
      //this.error = posts.error;
    });

  }


}
