import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterChoiceComponent} from './character-choice.component';

describe('CharacterChoiceComponent', () => {
  let component: CharacterChoiceComponent;
  let fixture: ComponentFixture<CharacterChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterChoiceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
