import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../model/character";
import {CharacterService} from "../../service/character.service";
import {AuthService} from "../../auth/shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-skill-attribution',
  templateUrl: './skill-attribution.component.html',
  styleUrls: ['./skill-attribution.component.css']
})
export class SkillAttributionComponent implements OnInit {

  @Input() character: Character = new Character(undefined, "", 1, 12, 10, 0, 0, 0, 0);
  errorMessage: string = "";


  constructor(private characterService: CharacterService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createCharacter() {
    this.character.setPlayerId(this.authService.currentPlayerValue.id);
    this.characterService.createCharacter(this.character)
      .subscribe(() => {
        this.character.hasBeenCreated = false;
      }, error => {
        this.errorMessage = error.error.message
      });
  }

  fightTrigger() {
    this.router.navigateByUrl('/fight-lobby', {state: {character: this.character}})
  }
}
