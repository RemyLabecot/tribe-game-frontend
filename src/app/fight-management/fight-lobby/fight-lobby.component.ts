import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Character} from "../../model/character";

@Component({
  selector: 'app-fight-lobby',
  templateUrl: './fight-lobby.component.html',
  styleUrls: ['./fight-lobby.component.css']
})
export class FightLobbyComponent implements OnInit {

  player_1_character: Character = new Character(undefined, "", 0, 0, 0, 0, 0, 0, 0);

  constructor(private router: Router) {
    this.player_1_character = this.router.getCurrentNavigation()!.extras.state!.character;
  }

  ngOnInit(): void {
  }

}
