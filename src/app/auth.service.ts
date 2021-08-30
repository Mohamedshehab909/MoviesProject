import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClint:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userToken') != null)
    {
      this.saveCurrentUser();
    }
   }

  currentUser = new BehaviorSubject(null) ;

  saveCurrentUser()
  {
    let token:any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));

  }

  register(Formdata:any):Observable<any>
  {
   return this._HttpClint.post('https://route-egypt-api.herokuapp.com/signup' , Formdata) ;
  }

  login(Formdata:any):Observable<any>
  {
   return this._HttpClint.post('https://route-egypt-api.herokuapp.com/signin' , Formdata) ;
  }

  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }
}
