import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UploadComponent } from './components/admin/upload/upload.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';

const routes: Routes = [
  { path: '', component: MainFrameComponent, 
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'anime/:id', component: AnimeDetailsComponent },
  ]
},

  { path: 'admin', component: AdminComponent, 
    children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
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
