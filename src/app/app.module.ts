import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule,  NbButtonModule, NbTreeGridModule, NbSidebarService,NbRouteTabsetModule, NbSidebarModule, NbMenuItem, NbMenuModule, NbIconModule, NbActionsModule, NbAutocompleteModule, NbToastrModule, NbDialogModule, NbPopoverModule, NbSelectModule  } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AdminComponent } from './components/admin/admin.component';
import { DatabaseService } from './services/database.service';
import { UploadComponent } from './components/admin/upload/upload.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OtherApiService } from "./services/other-api.service";
import { config, from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import {MatToolbarModule  } from '@angular/material/toolbar';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AddEpisodeComponent } from './components/add-episode/add-episode.component';
import { LinksComponent } from './components/links/links.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UsersComponent } from './components/admin/users/users.component';
import { ProfileComponent } from './components/profile/profile.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UploadComponent,
    EditComponent,
    HomeComponent,
    MainFrameComponent,
    AnimeDetailsComponent,
    AnimeCardComponent,
    AddEpisodeComponent,
    LinksComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    ProfileComponent
    
  ],
  imports: [
    NbSelectModule,
    NbPopoverModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbRouteTabsetModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    RouterModule,
    FormsModule,
    NbEvaIconsModule,
    NbIconModule,
    NbActionsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbTreeGridModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    NbLayoutModule,
    FlexLayoutModule,
    NbAutocompleteModule,
    NbToastrModule.forRoot(),
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    NbDialogModule.forRoot()
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },DatabaseService,   NbSidebarService, ApiService, OtherApiService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
