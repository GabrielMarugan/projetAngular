import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { commentaire } from './../../interfaces/commentaire';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {

  TabComment: commentaire[] = []

  constructor(private route:ActivatedRoute, private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.commentUser();
  }

  commentUser() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"]);
        that.userService.commentUser(id).subscribe({
          next(ret) {
            console.log(ret);
            that.TabComment = ret;
            console.log("comment was here");

          },
          error(err) {
            alert(err);
          }
        })
      }
    })
  }

}
