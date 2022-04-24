import { ArticleService } from './../article.service';
import { article } from './../../interfaces/article';
import { Router } from '@angular/router';
import { TokenService } from './../token.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  TabArticles: article[] = [];


  constructor(private serviceArticle: ArticleService, private router: Router, private token: TokenService) { }

  ngOnInit(): void {
    this.listArticle();
  }

  supInd(indSup: string): void {
    let indiceSupp = this.TabArticles.findIndex((art) => parseInt(indSup) === art.id_article);
    this.TabArticles.splice(indiceSupp,1);
   //this.commentArticle();
 }

 ajoutArt(art: article):void {
  this.TabArticles.unshift(art);
}


  listArticle() {
    console.log(`listArticle : `);
    let that = this;
    this.serviceArticle.listArticle().subscribe({
      next(ret) {
        console.log(ret);
        that.TabArticles = ret;
        //that.router.navigate(["/user"]);
      },
      error(err) {
        alert(err);
      }
    })
  }

  //===========================================
  newArticle(){
    this.router.navigate(["/article/new"]);
  }

}
