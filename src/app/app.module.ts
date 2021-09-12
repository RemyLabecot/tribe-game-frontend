import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CharacterManagementComponent} from './character-management/character-management.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthModule} from "./auth/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/shared/authconfig.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CharacterService} from "./service/character.service";
import {CharacterChoiceComponent} from './character-management/character-choice/character-choice.component';
import {SkillAttributionComponent} from './character-management/skill-attribution/skill-attribution.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FightLobbyComponent} from './fight-management/fight-lobby/fight-lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterManagementComponent,
    CharacterChoiceComponent,
    SkillAttributionComponent,
    FightLobbyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
