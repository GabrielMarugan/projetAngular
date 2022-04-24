import { article } from './../../interfaces/article';
import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-article',
  templateUrl: './user-article.component.html',
  styleUrls: ['./user-article.component.css']
})
export class UserArticleComponent implements OnInit {

  TabArticle: article[] = [];

  constructor( private route: ActivatedRoute, private router: Router, private userService:UserService) {}

  ngOnInit(): void {
    this.articleUser();
  }

  articleUser() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"]);
        that.userService.articleUser(id).subscribe({
          next(ret) {
            console.log(ret);
            that.TabArticle = ret;
            console.log("article was here");

          },
          error(err) {
            alert(err);
          }
        })
      }
    })
  }

}
