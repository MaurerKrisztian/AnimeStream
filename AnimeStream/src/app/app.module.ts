import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbButtonModule, NbSidebarService,NbRouteTabsetModule, NbSidebarModule, NbMenuItem, NbMenuModule  } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AdminComponent } from './components/admin/admin.component';
import { DatabaseService } from './services/database.service';
import { UploadComponent } from './components/admin/upload/upload.component';
import { EditComponent } from './components/admin/edit/edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UploadComponent,
    EditComponent,
  ],
  imports: [
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
  ],
  providers: [DatabaseService,   NbSidebarService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
