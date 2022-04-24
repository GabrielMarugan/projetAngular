import { TokenService } from './token.service';
import { login } from './../interfaces/login';
import { user } from './../interfaces/users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlBase = "https://reseau.jdedev.fr/api/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };





  constructor(private http: HttpClient, private token: TokenService) {

  }

  //   private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error);
  //     return Promise.reject(error.message || error);
  //  }
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


  connexion(login: login) {
    console.log('connexion');
    return this.http.post<any>(this.urlBase + '/connect', login, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )

  }

  subscribe(user: login) {
    console.log("je suis la");
    console.log(user);
    let inscrit = {
      pseudo: user.pseudo,
      email: user.email,
      password: user.password,
      avatar: ""
    };
    return this.http.post<any>(this.urlBase, inscrit, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )

  }

  isConnected(): boolean {
    return (this.token.getToken() !== "")
  }


  listUser() {
    console.log(`listUser:`);
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

  detailUser(id: number) {
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

  editUser(user: user) {
    console.log("le user que l'on va put");
    console.log(user);
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    let id: string = "";
    if (user.id) { id = user.id.toString(); };
    return this.http.put<any>(this.urlBase + '/' + id, user, opt)
      .pipe(
        catchError(this.handleError)
      )

  }

  deleteUser(id: number) {
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

  articleUser(id: number) {
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    };
    return this.http.get<any>(this.urlBase + '/' + id + '/article', opt)
      .pipe(
        catchError(this.handleError)
      )
  }

  commentUser(id: number) {
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
