import { TestBed } from '@angular/core/testing';
import { Card, CardNumber, Deck } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';

import { DeckService } from './deck.service';

describe('DeckService', () => {
  let service: DeckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Has default cards and suits', () => {
    describe('should contain correct suits', () => {
      it('contains clubs', () => {
        expect(service.suits).toContain(Suit.clubs);
      });

      it('contains spades', () => {
        expect(service.suits).toContain(Suit.spades);
      });

      it('contains hearts', () => {
        expect(service.suits).toContain(Suit.hearts);
      });

      it('contains diamons', () => {
        expect(service.suits).toContain(Suit.diamonds);
      });
    });

    describe('contains correct cards', () => {
      it('contains 1-13', () => {
        const validCardNumbers: CardNumber[] = [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
        ];

        for (const validCardNumberIter of validCardNumbers) {
          expect(service.cardNumbers).toContain(validCardNumberIter);
        }
      });

      it('should not contain 14', () => {
        expect(service.cardNumbers).not.toContain(14);
      });
    });
  });

  describe('should create a deck with all cards', () => {
    let deck: Deck;

    beforeEach(() => {
      deck = service.createUnshuffledDeck();
    });

    it('creates a deck of 52', () => {
      expect(deck.length).toBe(52);
    });

    it('contains one of each card', () => {
      for (const cardNumber of service.cardNumbers) {
        for (const suit of service.suits) {
          const card: Card = new Card(cardNumber, suit);

          expect(containsCard(deck, card)).toBeTruthy();
        }
      }
    });
  });
});

function containsCard(deck: Deck, card: Card): boolean {
  return deck.find(cardIter => cardIter.cardNumber === card.cardNumber && cardIter.suit === card.suit) ? true : false;
}
