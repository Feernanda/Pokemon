import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaypokemonComponent } from './playpokemon.component';

describe('PlaypokemonComponent', () => {
  let component: PlaypokemonComponent;
  let fixture: ComponentFixture<PlaypokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaypokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaypokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
