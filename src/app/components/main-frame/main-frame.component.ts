import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {

  searchStr;

  constructor(private api: ApiService, private router: Router) {
    
  } 

  ngOnInit(): void {
    
  }

  findAnime(){
    console.log(this.searchStr)
    this.router.navigate(['/home'], { queryParams: { term: this.searchStr }})
  }

}
