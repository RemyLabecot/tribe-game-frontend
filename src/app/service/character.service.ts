import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "../model/character";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  endpoint: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  createCharacter(character: Character): Observable<Character> {
    let api = `${this.endpoint}/characters/`;
    return this.httpClient.post<Character>(api, character);
  }

  findAllByPlayerId(id: number | undefined): Observable<Character[]> {
    let api = `${this.endpoint}/characters/${id}`;
    return this.httpClient.get<Character[]>(api);
  }
}
