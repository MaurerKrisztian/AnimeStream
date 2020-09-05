import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UploadComponent } from './components/admin/upload/upload.component';
import { EditComponent } from './components/admin/edit/edit.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, 
    children: [
    { path: '', redirectTo: 'upload', pathMatch: 'full' },
    { path: 'edit', component: EditComponent },
    { path: 'upload', component: UploadComponent },

  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
