import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Suit } from 'src/app/models/suit.enum';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.number = 7;
    component.suit = Suit.hearts;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should create card', () => {
    it('should show number for card', () => {
      const element = fixture.debugElement.query(By.css('.card-number'));
      expect(element.nativeElement.innerHTML).toBe('7');
    });

    it('should show suit', () => {
      const element = fixture.debugElement.query(By.css('.card-suit'));
      expect(element.nativeElement.innerHTML).toBe('H');
    });
  });
});
