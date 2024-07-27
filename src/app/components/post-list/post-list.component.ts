import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Post } from '../../models/Post';
import { StoreInterface } from '../../../store/store';
import { postAdd, postLoadList } from '../../../store/actions/post.action';
import { selectPosts } from '../../../store/selectors/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  error: string = '';
  constructor(private store: Store<StoreInterface>) { }

  ngOnInit() {
    //this.store.dispatch(postLoadList());  // dispatch action to load posts.
    this.store.pipe(select(selectPosts)).subscribe(posts => {
      this.posts = posts.posts;
      this.error = posts.error;
    });
  }
  addPost() {
    this.store.dispatch(postAdd({ post: { userId: 99999, id: 1, title: 'test', body: 'test' } }));
  }
}