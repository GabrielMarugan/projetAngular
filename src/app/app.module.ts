import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LogFormComponent } from './log-form/log-form.component';
import { FormInComponent } from './form-in/form-in.component';
import { FormUpComponent } from './form-up/form-up.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserArticleComponent } from './user-article/user-article.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { CommentsArticleComponent } from './comments-article/comments-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LogFormComponent,
    FormInComponent,
    FormUpComponent,
    ListUsersComponent,
    UserDetailComponent,
    UserArticleComponent,
    UserCommentComponent,
    ListArticlesComponent,
    DetailArticleComponent,
    CommentsArticleComponent,
    NewArticleComponent,
    ListCommentsComponent,
    DetailCommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
