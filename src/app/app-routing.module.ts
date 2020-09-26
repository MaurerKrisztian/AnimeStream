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
import { UsersComponent } from './components/admin/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'test', component: AnimeCardComponent },
  { path: '', component: MainFrameComponent, 
    children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'anime/:id', component: AnimeDetailsComponent },
    { path: 'links/:animeId', component: LinksComponent },
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'profile/:userId', component: ProfileComponent},
  ]
},

  { path: 'admin', component: AdminComponent, 
    children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'edit', component: EditComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'users', component: UsersComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
