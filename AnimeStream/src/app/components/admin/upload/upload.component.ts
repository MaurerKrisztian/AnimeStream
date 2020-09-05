import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }
  
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
   console.log(this.animeForm);
  }

}
