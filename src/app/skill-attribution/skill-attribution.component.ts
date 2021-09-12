import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../service/character.service";
import {AuthService} from "../auth/shared/auth.service";
import {Player} from "../model/player";

@Component({
  selector: 'app-skill-attribution',
  templateUrl: './skill-attribution.component.html',
  styleUrls: ['./skill-attribution.component.css']
})
export class SkillAttributionComponent {

  @Input() character: Character = new Character(undefined, "", 1, 12, 10, 0, 0, 0, 0);
  @Output() hasBeenCreatedEmitter = new EventEmitter<boolean>();
  errorMessage: string = "";
  hasBeenCreated: boolean = false;

  constructor(private characterService: CharacterService, private authService: AuthService) {}

  createCharacter() {
          this.character.setPlayerId(this.authService.currentPlayerValue.id);
          this.characterService.createCharacter(this.character)
          .subscribe(() => {
            this.hasBeenCreated = true;
            this.hasBeenCreatedEmitter.emit(true);
          }, error => {this.errorMessage = error.error.message});
  }
}
