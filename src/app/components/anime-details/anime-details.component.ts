import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  userRoles=localStorage.getItem('roles');
 
  private routeSub: Subscription;
  id : string;
  anime;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, public authService: AuthService) { }



  episodes: any;
  getAnimeEpisodes(id){
    this.api.get('/api/episode/anime/' + id).subscribe((episodes)=>{
      console.log(episodes)
      this.episodes = episodes;
    });
  }

  isSubscribe = false;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id']
    });

    this.getAnimeEpisodes(this.id);
    this.getAnimeById(this.id);

  }

  refreshSubscribe(){
    console.log(this.authService.getUserId(), this.anime.subscribers)
    if(this.anime.subscribers.includes(this.authService.getUserId())){
      this.isSubscribe = true
    }else {
      this.isSubscribe = false;
    }
  }

  getAnimeById(id: string){
    this.api.getById(this.id).subscribe((anime)=>{
      this.anime = anime[0];
      console.log(this.anime)

      this.refreshSubscribe();
  });
  }

  subscribe(id){
    this.api.patch('/api/anime/' + id + '/subscribe', {subscribe: !this.isSubscribe}).subscribe((res)=>{
      console.log(res)
      this.getAnimeById(id)
    })
  }

  // TODO: delete the links
  deleteAnime(id) {
    this.api.del('/api/anime/'+id).subscribe((response)=>{
      console.log("anime deleted.")
      this.router.navigate(['/home'])
    });
  }



}
