import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css'],
  providers: [AuthService]
})
export class MainFrameComponent implements OnInit {

  searchStr;

  auth;

  constructor(private api: ApiService, private router: Router, private authService: AuthService) {
    this.auth = authService;
  } 

  ngOnInit(): void {
    
  }

  findAnime(){
    console.log(this.searchStr)
    this.router.navigate(['/home'], { queryParams: { term: this.searchStr }})
  }

 

}
