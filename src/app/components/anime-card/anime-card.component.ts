import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css', './anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit {
  name = 'Angular 6';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

}
