import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes=[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllAnimes();
  }

  getAllAnimes(){
    this.api.getAll().subscribe((data)=>{
      this.animes = data;
      console.log(data)
  });
  }

}
