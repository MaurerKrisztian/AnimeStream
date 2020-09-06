import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private Api: ApiService) { }
  
    animeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    imglink: new FormControl(''),
    keywords: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit(): void {
  }

  submit(){
   console.log("Create anime: ", this.animeForm.value);
    this.Api.create({
      title: this.animeForm.value.title,
      description: this.animeForm.value.description,
      imageLink: this.animeForm.value.imglink
    }).subscribe((response)=>{
      console.log(response)
    })
    
  }

}
