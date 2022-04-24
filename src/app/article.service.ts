import { article } from './../interfaces/article';
import { catchError } from 'rxjs';
import { TokenService } from './token.service';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  urlBase = "https://reseau.jdedev.fr/api/article"
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

  listArticle() {
    console.log(`listArticle:`);
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

  detailArticle(id: number) {
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

  createArticle(art: article) {
    console.log("article crée ->");
    console.log(art);
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };

    return this.http.post<any>(this.urlBase, art, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================

  editArticle(art: article) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    let id: string = "";
    if (art.id_article) { id = art.id_article.toString(); };
    return this.http.put<any>(this.urlBase + '/' + id, art, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  //===================================================

  deleteArticle(id: number) {
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

  commentArticle(id: number) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlBase + '/' + id + '/comment', opt)
      .pipe(
        catchError(this.handleError)
      )
  }

}

