import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit {
  displayedColumns: string[] = ['title', 'description', 'imageLink', 'delete'];
  
  constructor(private api: ApiService){
    
  }
  ngOnInit(): void {
      this.renderTable();
  }

  renderTable(){
    this.api.getAll().subscribe((data)=>{
      this.ELEMENT_DATA = data;
      console.log(data)
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  });
  }

  deleteAnime(id){
    console.log("id: " + id)
      this.api.delete(id).subscribe((data)=> {
        console.log(data)
      });

      this.renderTable();
  }


 ELEMENT_DATA: PeriodicElement[] = [
];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}

export interface PeriodicElement {
  title: string;
  description: string;
  imageLink: string;
  delete: string;
}
