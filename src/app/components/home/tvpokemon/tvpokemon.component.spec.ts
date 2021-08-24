import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvpokemonComponent } from './tvpokemon.component';

describe('TvpokemonComponent', () => {
  let component: TvpokemonComponent;
  let fixture: ComponentFixture<TvpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
