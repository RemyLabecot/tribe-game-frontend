import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from "./auth/signin/signin.component";
import {CharacterManagementComponent} from "./character-management/character-management.component";
import {AuthGuard} from "./auth/shared/auth.guard";
import {SignupComponent} from "./auth/signup/signup.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'character-creation', component: CharacterManagementComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
