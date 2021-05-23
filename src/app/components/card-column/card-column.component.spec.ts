import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardColumn } from 'src/app/models/card-column/card-column.class';
import { Card, Deck } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';
import { CardColorPipe } from 'src/app/pipes/card-color/card-color.pipe';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';

import { CardColumnComponent } from './card-column.component';

describe('CardColumnComponent', () => {
  let component: CardColumnComponent;
  let fixture: ComponentFixture<CardColumnComponent>;
  let cards: Deck;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardColumnComponent,
        CardComponent,
        CardColorPipe,
        FaceNumberPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColumnComponent);
    component = fixture.componentInstance;
    cards = [new Card(7, Suit.clubs), new Card(6, Suit.diamonds)];
    component.cardColumn = new CardColumn(cards);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cards', () => {
    const expected = cards.length;
    const element = fixture.debugElement.queryAll(By.css('app-card'));
    const actual = element.length;

    expect(actual).toBe(expected);
  });
});
