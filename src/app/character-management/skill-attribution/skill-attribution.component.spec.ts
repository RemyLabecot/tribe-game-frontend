import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillAttributionComponent} from './skill-attribution.component';

describe('SkillAttributionComponent', () => {
  let component: SkillAttributionComponent;
  let fixture: ComponentFixture<SkillAttributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillAttributionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
