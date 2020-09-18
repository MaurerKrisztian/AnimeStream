import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'roles', 'edit'];
  ELEMENT_DATA: PeriodicElement[] = [];

  constructor(private api: ApiService) { }

  users:any;
  ngOnInit(): void {
    this.renderTable()
  }

  renderTable(){
    this.api.get("/api/user").subscribe((users: any)=>{
      this.users = users;
      console.log(users)
      this.ELEMENT_DATA = users;
      
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

deleteUser(id: string){
  this.api.del("/api/user/" + id).subscribe((message)=>{
    console.log(message)
  })
}



}


export interface PeriodicElement {
  name: string;
  roles: string;
}
