import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from "./services/auth.guard";
import {ProfilePageComponent} from "./profile/profilepage/profilepage.component";


const routes: Routes = [
  { path: '', component: ProfilePageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'login/:callback', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
