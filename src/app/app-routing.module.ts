import { ConnectGuardGuard } from './connect-guard.guard';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { CommentsArticleComponent } from './comments-article/comments-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { UserArticleComponent } from './user-article/user-article.component';
import { UserCommentComponent } from './user-comment/user-comment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormUpComponent } from './form-up/form-up.component';
import { FormInComponent } from './form-in/form-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: FormInComponent },
  { path: "signIn", component: FormInComponent },
  { path: "signUp", component: FormUpComponent },
  {
    path: "user", children: [
      { path: "liste", component: ListUsersComponent, canActivate:[ConnectGuardGuard] },
      {
        path: ":id", children: [
          { path: "", component: UserDetailComponent, canActivate:[ConnectGuardGuard] },
          { path: "article", component: UserArticleComponent, canActivate:[ConnectGuardGuard] },
          { path: "comment", component: UserCommentComponent, canActivate:[ConnectGuardGuard] }
        ]
      },
    ]
  },
  {
    path: "article", children: [
      { path: "", component: ListArticlesComponent, canActivate:[ConnectGuardGuard] },
      { path: "new", component: NewArticleComponent, canActivate:[ConnectGuardGuard] },
      { path: ":id", component: DetailArticleComponent, canActivate:[ConnectGuardGuard] },
      { path: ":id/comment", component: CommentsArticleComponent, canActivate:[ConnectGuardGuard] }
    ]
  },
  {
    path: "commentaire", children: [
      { path: "", component: ListCommentsComponent, canActivate:[ConnectGuardGuard]},
      { path: "new", component: NewCommentComponent, canActivate:[ConnectGuardGuard]},
      { path: ":id", component: DetailCommentComponent, canActivate:[ConnectGuardGuard] }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
