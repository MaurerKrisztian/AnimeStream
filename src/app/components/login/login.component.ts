import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue) {
    console.warn(this.loginForm.value);

    this.login(this.loginForm.value.email, this.loginForm.value.password)
  }

  login(email, password){
    this.api.post('/api/login', {email: email, password: password}).subscribe((response: any) => {
      console.log("login: ", response)

      localStorage.setItem('accessToken', response.accessToken)
    })
  }



}
