import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { FormsModule } from '@angular/forms';
import player from 'lottie-web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from '../store/reducers/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { StoreReducer } from '../store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostEffects } from '../store/effects/post.effects';
import { PostListComponent } from './components/post-list/post-list.component';
import { MessageEffects } from '../store/effects/message.effects';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../store/Router/CustomSerializer';
import { CommentEffects } from '../store/effects/comment.effects';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EditModalComponent,
    MyCounterComponent,
    PostListComponent,
    LoadSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(StoreReducer),
    EffectsModule.forRoot([PostEffects, MessageEffects, CommentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
