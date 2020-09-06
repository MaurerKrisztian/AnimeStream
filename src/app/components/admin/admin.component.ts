import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  ngOnInit(): void {
  }

  items: NbMenuItem[] = [
    {
      title: 'Edit',
      link: '/admin/edit',
      icon: 'edit-2-outline'
    },
    {
      title: 'Upload',
      link: '/admin/upload',
      icon: 'upload-outline'
    }
   ];

}
