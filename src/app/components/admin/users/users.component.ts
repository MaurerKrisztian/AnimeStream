import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'roles', 'edit'];
  ELEMENT_DATA: PeriodicElement[] = [];
  users:any;
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  selectedItem = 'user';
 
  constructor(private api: ApiService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.renderTable()
  }

  open(dialog: TemplateRef<any>, userId) {
    this.dialogService.open(dialog, { context: userId },);
  }

 

  renderTable(){
    this.api.get("/api/user").subscribe((users: any)=>{
      this.users = users;
      console.log(users)
      this.ELEMENT_DATA = users;
      
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

deleteUser(id: string){
  this.api.del("/api/user/" + id).subscribe((message)=>{
    console.log(message)
    this.renderTable()
  })
}

editRole(id, roles){
  this.api.patch("/api/user/" + id, {roles: roles}).subscribe((message)=>{
    console.log(message)
    this.renderTable()
  })

}



}


export interface PeriodicElement {
  name: string;
  roles: string;
}
