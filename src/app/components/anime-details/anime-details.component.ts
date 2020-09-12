import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
 
  private routeSub: Subscription;
  id : string;
  anime;

  constructor(private route: ActivatedRoute,private api: ApiService) { }

  episodes: any;
  getAnimeEpisodes(id){
    this.api.get('/api/episode/anime/' + id).subscribe((episodes)=>{
      console.log(episodes)
      this.episodes = episodes;
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });

    this.getAnimeEpisodes(this.id);
    this.getAnimeById(this.id);
  }

  getAnimeById(id: string){
    this.api.getById(this.id).subscribe((anime)=>{
      this.anime = anime[0];
      console.log(this.anime)
  });
  }



}
