import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth(){
    return (localStorage.getItem('accessToken') != undefined || localStorage.getItem('accessToken') != null)
  }

  // Todo: save and send the user roles
  userRoles(){
    return localStorage.userRoles;
  }

  getToken(){
    return localStorage.getItem('accessToken')
  }

}
