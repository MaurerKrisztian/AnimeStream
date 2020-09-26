import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formValue) {
    console.warn(this.registrationForm.value);

    this.registration(this.registrationForm.value.email,this.registrationForm.value.name,  this.registrationForm.value.password)
  }

  registration(email, name, password){
    this.api.post('/api/user', {email: email, name: name, password: password}).subscribe((response) => {
      console.log("registration: " , response)
      this.router.navigate(['/login']);

    })
  }

}
