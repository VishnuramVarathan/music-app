import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './admin/user/user.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { FormsModule } from '@angular/forms';
import { UserGroupsComponent } from './admin/user-groups/user-groups.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './master/login/login.component';
import { LogoutComponent } from './master/logout/logout.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { FavouriteComponent } from './yourLibrary/favourite/favourite.component';
import { RecntlyPlayedComponent } from './yourLibrary/recntly-played/recntly-played.component';
import { PlayListComponent } from './yourLibrary/play-list/play-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRolesComponent,
    UserGroupsComponent,
    MasterComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FavouriteComponent,
    RecntlyPlayedComponent,
    PlayListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
