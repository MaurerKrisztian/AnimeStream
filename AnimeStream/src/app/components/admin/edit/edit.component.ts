import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private api: ApiService) {
    
   }

  ngOnInit(): void {
    this.api.getAll().subscribe((data)=>{
      console.log(data)
    });

    this.api.getById(12).subscribe((data)=>{
      console.log("Api call working: ", data)
    });
  }

}
