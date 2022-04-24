import { EventEmitter } from '@angular/core';
import { TokenService } from './../token.service';
import { CommentaireService } from './../commentaire.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { commentaire } from './../../interfaces/commentaire';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})


export class DetailCommentComponent implements OnInit {

  @Input()  idCom: number | undefined ;
  @Output() indSupChange = new EventEmitter();
  
  SuppValue(value:string){
    this.indSupChange.emit(value);
  }
 



  isEdited: boolean = false;

  commentf = this.formBuilder.group({
    contenu: "",
  });

  commentd: commentaire = {
    contenu: "",
    creation: "",
    id_commentaire: 0,
    id_article: 0,
  }

  constructor(private token: TokenService,private formBuilder: FormBuilder, private router: Router, private commentService: CommentaireService) { }

  ngOnInit(): void {
    this.detailComment();
  }



  detailComment() {
    let that = this;

        if (that.idCom)
          that.commentService.detailComment(that.idCom).subscribe({
            next(ret) {
              console.log(ret);
              that.commentd = ret;
            },
            error(err) {
              alert(err);
            }
          })

  }

  //==========================================
  editComment() {
    let that = this;
    console.log("on est la pour modifier");
    let tmp = {
      contenu: this.commentf.value.contenu,
      creation: this.commentf.value.creation,
      id_article: this.commentd.id_article,
      id_commentaire: this.commentd.id_commentaire
    }
    this.commentService.editComment(tmp).subscribe({
      next(ret) {
        console.log("modification  commentaire réussi");
        that.commentd = ret;
        that.isEdited=false;
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
      contenu: this.commentd.contenu,
      creation: this.commentd.creation,
    })
    this.commentf = tmp;
  }

  //==================================

  deleteComment() {
    let that = this;

        this.commentService.deleteComment(this.commentd.id_commentaire).subscribe({
          next(ret) {
            console.log(ret);
            that.SuppValue(that.commentd.id_commentaire.toString());
            console.log("suppression commentaire réussi");
            that.router.navigate(["/article/"+that.commentd.id_article.toString()]);
          },
          error(err) {
            alert(err);
          }
        })
  }

  //===================================
  isAuthor(id:number|undefined): boolean {
    if (id) {
      return this.token.isAuthor(id);
    }
    else return false;
  }


}
