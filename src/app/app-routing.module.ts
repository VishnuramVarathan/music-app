import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupsComponent } from './admin/user-groups/user-groups.component';
import { UserRolesComponent } from './admin/user-roles/user-roles.component';
import { UserComponent } from './admin/user/user.component';
import { FooterComponent } from './master/footer/footer.component';
import { HeaderComponent } from './master/header/header.component';
import { LoginComponent } from './master/login/login.component';
import { LogoutComponent } from './master/logout/logout.component';
import { NavbarComponent } from './master/navbar/navbar.component';
import { RegsitrationComponent } from './master/regsitration/regsitration.component';
import { ApiComponent } from './service/api/api.component';
import { FeedbackComponent } from './service/feedback/feedback.component';
import { HelpComponent } from './service/help/help.component';
import { FavouriteComponent } from './yourLibrary/favourite/favourite.component';
import { PlayListComponent } from './yourLibrary/play-list/play-list.component';
import { RecntlyPlayedComponent } from './yourLibrary/recntly-played/recntly-played.component';

const routes: Routes = [

    { path : 'user', component: UserComponent},
    { path : 'userRoles', component : UserRolesComponent},
    { path : 'userGroups', component: UserGroupsComponent},
    { path : 'footer', component: FooterComponent},
    { path : 'header', component: HeaderComponent},
    { path : 'login', component: LoginComponent},
    { path : 'logout', component: LogoutComponent},
    { path : 'regsitration', component: RegsitrationComponent},
    { path : 'navbar', component: NavbarComponent},
    { path : 'api', component: ApiComponent},
    { path : 'feedback', component: FeedbackComponent},
    { path : 'help', component: HelpComponent},
    { path : 'favourite', component: FavouriteComponent},
    { path : 'playList', component: PlayListComponent},
    { path : 'recntlyPlayed', component: RecntlyPlayedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 