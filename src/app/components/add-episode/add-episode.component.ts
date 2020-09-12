import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { NbToastrService } from '@nebular/theme';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-episode',
  templateUrl: './add-episode.component.html',
  styleUrls: ['./add-episode.component.css']
})
export class AddEpisodeComponent implements OnInit {

  @Input()
  private animeId : string;

  seasonInp;
  partInp;

  form: FormGroup;
  constructor(private Api: ApiService, private toastrService: NbToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log("animeid: ", this.animeId)
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    })
  }

  
  createItem() {
    return this.fb.group({
      link: [''],
      quality: [''],
      storageName:  ['']
    })
  }

  addNext() {
    (this.form.get('items') as FormArray).push(this.createItem())
  }

  getControls() {
    return (this.form.get('items') as FormArray).controls;
  }

  submit() {

    let data =     {
      animeId: this.animeId,
      title: "test title",
      season: this.seasonInp,
      part: this.partInp,
      links: this.form.value.items
   }

    this.Api.post('/api/episode', data).subscribe(()=>{

    });
    console.log(this.form.value);
  }

  public removeRow(index: number): void {
    const link = this.form.get('items') as FormArray;
    link.removeAt(index);
  }
  
}
