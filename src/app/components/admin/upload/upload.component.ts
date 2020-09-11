import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  form: FormGroup;
  constructor(private Api: ApiService, private toastrService: NbToastrService, private fb: FormBuilder) { }
  
    animeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    imglink: new FormControl(''),
    keywords: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit(): void {
    
    //autocomplete
    this.options = [];
    this.filteredOptions$ = of(this.options);

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

  submit2() {
    console.log(this.form.value, this.animeForm.value);
  }

  public removeRow(index: number): void {
    const link = this.form.get('items') as FormArray;
    link.removeAt(index);
  }
  

  searchAnime(search){
    this.options = [];
    this.Api.getJikanAnime(search).subscribe((data: any)=>{
      console.log(data)
      data.results.forEach(element => {
        console.log("element", element.title)
        this.options.push({str: element.title, element});
      });

      this.filteredOptions$ = of(this.options);

      //this.options = JSON.stringify(data);
  });
  }

  //// autocomplete

  options: any;
  filteredOptions$: Observable<string[]>;

  @ViewChild('autoInput') input;


  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  timer
  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);

    clearTimeout(this.timer);
    this.timer  = setTimeout(() => {
      this.searchAnime(this.input.nativeElement.value)
    }, 2000)
  }

  selectedOption : any = '';
  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    this.selectedOption = $event.element;
    console.log("selected",this.selectedOption)
    this.animeForm.patchValue({
      title: this.selectedOption.title,
      description: this.selectedOption.synopsis,
      imglink: this.selectedOption.image_url
    });
  }


  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  showToast(position, status, message) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }

 


  ////

  submit(){
   
    console.log("Create anime: ", this.animeForm.value);
    this.Api.create({
      title: this.animeForm.value.title,
      description: this.animeForm.value.description,
      imageLink: this.animeForm.value.imglink
    }).subscribe((response)=>{
      console.log(response)
      this.showToast('top-right', 'success', "Anime saved.");
    })


    
  }

}
