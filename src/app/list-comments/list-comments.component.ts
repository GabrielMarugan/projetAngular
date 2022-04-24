import { commentaire } from './../../interfaces/commentaire';
import { TokenService } from './../token.service';
import { Router } from '@angular/router';
import { CommentaireService } from './../commentaire.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  TabComments: commentaire[] = [];

  constructor(private serviceComment: CommentaireService, private router: Router, private token: TokenService) { }

  ngOnInit(): void {
    this.listComment()
  }

  listComment() {
    console.log(`listComment : `);
    let that = this;
    this.serviceComment.listComment().subscribe({
      next(ret) {
        console.log(ret);
        that.TabComments = ret;
      },
      error(err) {
        alert(err);
      }
    })
  }


  //===========================================
  newComment(){
    this.router.navigate(["/commentaire/new"]);
  }

}
