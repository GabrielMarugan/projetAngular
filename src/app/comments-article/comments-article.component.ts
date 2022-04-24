import { article } from './../../interfaces/article';
import { CommentaireService } from './../commentaire.service';
import { TokenService } from './../token.service';
import { FormBuilder } from '@angular/forms';
import { commentaire } from './../../interfaces/commentaire';
import { ArticleService } from './../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-article',
  templateUrl: './comments-article.component.html',
  styleUrls: ['./comments-article.component.css']
})
export class CommentsArticleComponent implements OnInit {



  isEdited: boolean = false;
  TabComment: commentaire[] = [];

  comf = this.formBuilder.group({

    contenu: "",

  });

  comd: commentaire = {
    id_commentaire: 0,
    contenu: "",
    creation: "",
    id_article: 0,
    id: 0
  }


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private articleService: ArticleService, private token: TokenService, private commService: CommentaireService) { }

  ngOnInit(): void {
    this.commentArticle();
  }

   supInd(indSup: string): void {
      let indiceSupp = this.TabComment.findIndex((com) => parseInt(indSup) === com.id_commentaire);
      this.TabComment.splice(indiceSupp,1);
     //this.commentArticle();
   }

   ajoutCom(comment: commentaire):void {
     this.TabComment.unshift(comment);
   }


  commentArticle() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"]);
        that.articleService.commentArticle(id).subscribe({
          next(ret) {
            console.log(ret);
            that.TabComment = ret;

          },
          error(err) {
            alert(err);
          }
        })
      }
    })
  }
  //===============================================
  clickEdit() {
    this.isEdited = true;
    let tmp = this.formBuilder.group({
      contenu: this.comd.contenu,
      creation: this.comd.creation,
    })
    this.comf = tmp;
  }
  //=================================================

  isAuthor(id:number|undefined): boolean {
    if (id) {
      return this.token.isAuthor(id);
    }
    else return false;
  }


}
