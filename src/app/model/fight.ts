import {Character} from "./character";

export class Fight {

  player_1: Character;
  player_2: Character;


  constructor(player_1: Character, player_2: Character) {
    this.player_1 = player_1;
    this.player_2 = player_2;
  }
}
