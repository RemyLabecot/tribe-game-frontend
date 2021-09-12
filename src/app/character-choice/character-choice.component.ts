import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
import {Character} from "../model/character";

class CharacterSkins {
  id: string;
  imageUrl: string;


  constructor(id: string, imageUrl: string) {
    this.id = id;
    this.imageUrl = imageUrl;
  }
}

@Component({
  selector: 'app-character-choice',
  templateUrl: './character-choice.component.html',
  styleUrls: ['./character-choice.component.css']
})
export class CharacterChoiceComponent implements OnInit {

  skinsCharacter: CharacterSkins[] = [];
  @Output() newCharacterEvent = new EventEmitter<Character>();

  constructor(private modalService: NgbModal, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const _jsonUrl = 'assets/characters-img/characters.json';
    this.httpClient.get(_jsonUrl).subscribe(
      data => this.skinsCharacter = data as CharacterSkins[]
    );
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  chooseCharacter(skin: string) {
    const character: Character = new Character(undefined, skin, 1, 12, 10, 0, 0, 0, 0);
    this.newCharacterEvent.emit(character);
    this.modalService.dismissAll();
  }
}
