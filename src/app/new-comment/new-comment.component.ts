import { commentaire } from './../../interfaces/commentaire';
import { CommentaireService } from './../commentaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Output() newComment = new EventEmitter();

  commentForm = this.formBuilder.group({
    contenu: "" as string,
  });


  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private commentService: CommentaireService) { }

  ngOnInit(): void {

  }

  AddCom(comment:commentaire){
    this.newComment.emit(comment);
  }

  validForm() {

    let that = this;
    this.route.params.subscribe({
      next(val) {
        let id = parseInt(val["id"]);
        console.log(that.commentForm.value);
        that.commentService.createComment(that.commentForm.value, id).subscribe({
          next(ret) {
            that.commentForm.value.contenu = "";
            that.AddCom(ret);
          },
          error(err) {
            alert(err);
          }
        })

      }
    })
  }








}
