import { commentaire } from './../interfaces/commentaire';
import { catchError } from 'rxjs';
import { TokenService } from './token.service';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  
  urlBase = "https://reseau.jdedev.fr/api/comment"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private token: TokenService) { }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return Promise.reject(error.message || error);
  }



  //===================================================

  listComment() {
    console.log(`listComment:`);
    console.log(this.token)
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlBase, opt)
      .pipe(
        catchError(this.handleError)
      )
  }

  //===================================================

  detailComment(id: number) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlBase + '/' + id, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================

  createComment(comment: commentaire, id:number) {
    console.log("commentaire crée ->");
    console.log(comment);
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
     let tmp = {
         contenu: comment.contenu,
          idArt: id
      };
    return this.http.post<any>(this.urlBase, tmp, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================

  editComment(comment: commentaire) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    let id: string = "";
    if (comment.id_commentaire) { id = comment.id_commentaire.toString(); };
    return this.http.put<any>(this.urlBase + '/' + id, comment, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================

  deleteComment(id: number) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.delete<any>(this.urlBase + '/' + id, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================




}
