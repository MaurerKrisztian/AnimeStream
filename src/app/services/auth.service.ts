import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  isAuth(){
    return (localStorage.getItem('accessToken') != undefined || localStorage.getItem('accessToken') != null)
  }


  getCurrentUser(){
    return this.api.get('/api/user/'+localStorage.getItem('userId'))
  }

  // Todo: save and send the user roles
  userRoles(){
    return localStorage.userRoles;
  }

  getToken(){
    return localStorage.getItem('accessToken')
  }

  getUserId(){
    return localStorage.getItem('userId')
  }

  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('roles')
}

}
