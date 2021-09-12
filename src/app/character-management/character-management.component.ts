import {Component, OnInit} from '@angular/core';
import {Character} from "../model/character";
import {CharacterService} from "../service/character.service";
import {AuthService} from "../auth/shared/auth.service";

@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css']
})
export class CharacterManagementComponent implements OnInit {

  characters: Character[] = [];
  selectCharacter: Character = new Character(undefined, "", 1, 12, 10, 0, 0, 0, 0);

  constructor(private characterService: CharacterService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.findAllCharacters(this.authService.currentPlayerValue.id)
  }

  private findAllCharacters(id: number) {
    this.characterService.findAllByPlayerId(id)
      .subscribe(characters => this.characters = characters);
  }

  chooseSkinCharacter(character: Character) {
    this.selectCharacter = character;
    this.characters.push(character);
  }

  displayCharacter(character: Character) {
    this.selectCharacter = character;
  }
}
