import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./auth/signin/signin.component";
import {CharacterManagementComponent} from "./character-management/character-management.component";
import {AuthGuard} from "./auth/shared/auth.guard";
import {SignupComponent} from "./auth/signup/signup.component";
import {FightLobbyComponent} from "./fight-management/fight-lobby/fight-lobby.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'character-creation', component: CharacterManagementComponent, canActivate: [AuthGuard]},
  {path: 'fight-lobby', component: FightLobbyComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
