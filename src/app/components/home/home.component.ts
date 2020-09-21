import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss'],
})
export class HomeComponent implements OnInit {
  animes;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  term = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['term'] != undefined) {
        this.term = params['term'];
        console.log(this.term);
      }

      this.getAnimes(this.term);
      console.log(this.term);
    });
  }

  getAnimes(term) {
    this.api.get('/api/anime?term=' + term).subscribe((data) => {
      this.animes = data;
      console.log(data);
    });
  }
}
