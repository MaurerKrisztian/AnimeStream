import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss'],
})
export class HomeComponent implements OnInit {
  animes;

  length = 100;
  pageSize = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  pageEvent: PageEvent;

  pagination($event){
    console.log("test", $event)

    this.getAnimes(this.term, $event.pageIndex, $event.pageSize)
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  term = '';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['term'] != undefined) {
        this.term = params['term'];
        console.log(this.term);
      }

      this.getAnimes(this.term, 1, this.pageSize);
      console.log(this.term);
    });
  }

  getAnimes(term, pageIndex, pageSize) {
    this.api.get('/api/anime?term=' + term + '&page='+pageIndex+'&limit='+ pageSize).subscribe((data: any) => {
      this.animes = data.data;
      this.length = data.meta.collectionSize
      console.log(data);
    });
  }
}
