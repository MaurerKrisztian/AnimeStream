import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api: ApiService) { }

  tableData;
  
  id;
  routeSub: Subscription;
  
  season;
  part;

  episodes;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['animeId'];
    });
    this.route.queryParams.subscribe(params => {
      this.season = params['s'];
      this.part = params['p'];
  });

  this.api.get('/api/episode/anime/' + this.id).subscribe((episodes)=>{
    console.log(episodes)
    this.episodes = episodes;

    
    this.episodes.forEach(episode => {
      if(episode.season == this.season && episode.part == this.part ){
        this.tableData = episode.links;
        console.log("tabledata",this.tableData)
        this.dataSource = this.tableData;
      }
    });

  });

    console.log("season: " + this.season + " part " + this.part + " id: " + this.id, this.episodes);

    //this.dataSource - this.tableData;
  }


  displayedColumns: string[] = ['storageName', 'quality', 'link', 'delete'];
  dataSource;//this.episodes.links;
}
