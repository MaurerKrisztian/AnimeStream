import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UploadComponent } from './components/admin/upload/upload.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { LinksComponent } from './components/links/links.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  { path: 'card', component: AnimeCardComponent },
  { path: '', component: MainFrameComponent, 
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'anime/:id', component: AnimeDetailsComponent },
    { path: 'links/:animeId', component: LinksComponent },
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
  ]
},

  { path: 'admin', component: AdminComponent, 
    children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'edit', component: EditComponent },
    { path: 'upload', component: UploadComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
