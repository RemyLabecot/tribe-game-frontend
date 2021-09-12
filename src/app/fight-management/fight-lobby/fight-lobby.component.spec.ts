import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FightLobbyComponent} from './fight-lobby.component';

describe('FightLobbyComponent', () => {
  let component: FightLobbyComponent;
  let fixture: ComponentFixture<FightLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FightLobbyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
