import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Prodotto } from '../../../AngToSpring/src/app/model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isProductLogged = false;
  token!:string;

  uri: string = 'http://localhost:8080';
  currentProduct!:string;

  constructor(private http: HttpClient) { }

  loginProduct(prodotto: Prodotto): Observable<string> {
    this.currentProduct = prodotto.nome;
    return this.http.post<string>(`${this.uri}/getLoginToken`, prodotto)
  }

  isProductLoggedIn():boolean {
    if(this.token=="admin"){
      this.isProductLogged = true;
    }
    else if(this.token=="guest"){
      this.isProductLogged = true;
    }
    else if(this.token=="mod"){
      this.isProductLogged = true;
    }
    else{
      this.isProductLogged = false;
    }
    return this.isProductLogged;
  }

}

