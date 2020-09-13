import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  error="";
  

  constructor(private api: ApiService,private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(formValue) {
    console.warn(this.loginForm.value);

    this.login(this.loginForm.value.email, this.loginForm.value.password).then(()=>{
      this.router.navigate(['/home']);
    }).catch((err)=>{
      this.error = err;
    })
  }

  login(email, password){
    return new Promise((resolve, reject)=>{

      this.api.post('/api/login', {email: email, password: password}).toPromise().then((response: any) => {
        //console.log("login: ", response)
  
        if(response.accessToken != undefined){
          localStorage.setItem('accessToken', response.accessToken)
          localStorage.setItem('userId', response.userId)
          localStorage.setItem('roles', response.roles)
          resolve();
        }else {
          reject("wrong email / password");
        }

      }).catch((err)=>{
        reject("wrong email / password");
      })
    }

      );
  }

  logout(){
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('roles')
  }



}
