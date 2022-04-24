import { TokenService } from './../token.service';
import { article } from './../../interfaces/article';
import { ArticleService } from './../article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  @Input()  idArt: number | undefined ;
  @Output() indSupChange = new EventEmitter();

  SuppValue(value:string){
    this.indSupChange.emit(value);
  }
  

  isEdited: boolean = false;
  artf = this.formBuilder.group({
    titre: "",
    contenu: "",
  });

  artd: article = {
    titre: "",
    contenu: "",
    creation: "",
    id_article: 0,
    id: 0
  }


  constructor(private token:TokenService,private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.detailArticle();
  }

  detailArticle() {
    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"])
        that.articleService.detailArticle(id).subscribe({
          next(ret) {
            console.log(ret);
            that.artd = ret;
          },
          error(err) {
            alert(err);
          }
        })

      }
    })
  }

  //==========================================
  editArticle() {
    let that = this;
    let tmp = {
      titre: this.artf.value.titre,
      contenu: this.artf.value.contenu,
      creation: this.artf.value.creation,
      id_article: this.artd.id_article
    }
    this.articleService.editArticle(tmp).subscribe({
      next(ret) {
        console.log("modification  article réussi");
        that.artd = ret;
        that.isEdited=false;
        //that.router.navigate(["/article"]);
      },
      error(err) {
        alert(err);
      }
    })
  }
  //==================================================

  clickEdit() {
    this.isEdited = true;
    let tmp = this.formBuilder.group({
      titre: this.artd.titre,
      contenu: this.artd.contenu,
    })
    this.artf = tmp;
  }

  //==================================

  deleteArticle() {
    let that = this;
    // this.route.params.subscribe({
    //   next(val) {
    //     let id = parseInt(val["id"]);
      if(this.artd.id_article)
        this.articleService.deleteArticle(this.artd.id_article).subscribe({
          next(ret) {
            console.log(ret);
            if(that.artd.id_article)
              that.SuppValue(that.artd.id_article.toString());
            console.log("suppression article réussi");
            that.router.navigate(["/article"]);
          },
          error(err) {
            alert(err);
          }
        })
    //   }
    // })
  }

    //===================================
    isAuthor(id:number|undefined): boolean {
      if (id) {
        return this.token.isAuthor(id);
      }
      else return false;
    }

}
