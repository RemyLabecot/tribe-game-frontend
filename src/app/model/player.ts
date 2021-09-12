import {Character} from "./character";

export class Player{

  id!: number;
  name!: string;
  email!: string;
  password!: string;
  characters!: Character[];

  public static from(object: any): Player {
    let player = new Player();
    player.id = object.id;
    player.name = object.name;
    player.email = object.email;
    player.password = object.password;
    player.characters = object.characters;
    return player;
  }
}
