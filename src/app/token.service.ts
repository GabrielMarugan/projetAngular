import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  idConnected: number = 0;
  token: string = "";
  constructor() { }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  setIdConnected(id: number) {
    this.idConnected = id;
  }

  getIdConnected(): number {
    return this.idConnected;
  }

  isAuthor(id:number):boolean{
    return (id === this.idConnected);
  }

}


