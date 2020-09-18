import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private api: ApiService) { 

  }

  routeSub: Subscription
  userId
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.getUser(this.userId)
    });

  }

  user;
  getUser(id){
    this.api.get('/api/user/' + id).subscribe((user)=>{
      this.user = user;
      console.log(user)
    })
  }
}
