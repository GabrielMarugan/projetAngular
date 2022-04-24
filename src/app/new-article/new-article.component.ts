import { article } from './../../interfaces/article';
import { ArticleService } from './../article.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  @Output() newArt = new EventEmitter();

  articleForm = this.formBuilder.group({
    titre: "" as string,
    contenu: "" as string,
  });


  constructor(private formBuilder: FormBuilder, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  
  AddArt(art:article){
    this.newArt.emit(art);
  }

  validForm() {
    console.log(this.articleForm.value);
    let that = this;

    this.articleService.createArticle(this.articleForm.value).subscribe({
      next(ret) {
        that.AddArt(ret);
        that.router.navigate(["/article"])
      },
      error(err) {
        alert(err);
      }
    })
  }

}
