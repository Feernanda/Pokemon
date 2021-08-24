import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingcardgameComponent } from './tradingcardgame.component';

describe('TradingcardgameComponent', () => {
  let component: TradingcardgameComponent;
  let fixture: ComponentFixture<TradingcardgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingcardgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingcardgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
