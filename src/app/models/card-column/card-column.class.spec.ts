import { CardColumn } from 'src/app/models/card-column/card-column.class';
import { Card } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';

describe('CardColumn', () => {
  describe('should construct', () => {
    it('should assign cards when given cards array', () => {
      const cards: Card[] = [new Card(7, Suit.hearts), new Card(3, Suit.clubs)];
      const cardColumn = new CardColumn(cards);
      expect(cardColumn.cards).toBeTruthy();
      expect(cardColumn.cards).toBe(cards);
      expect(cardColumn.cards.length).toBe(cards.length);
    });

    it('should default assign to empty array', () => {
      const cardColumn = new CardColumn();
      expect(cardColumn.cards).toBeTruthy();
      expect(cardColumn.cards.length).toBe(0);
    });
  });

  describe('it should add cards', () => {
    const cards: Card[] = [new Card(7, Suit.hearts), new Card(3, Suit.clubs)];
    const cardColumn = new CardColumn(cards);

    expect(cardColumn.cards.length).toBe(cards.length);

    const cardToAdd = new Card(5, Suit.diamonds);
    cardColumn.addCard(cardToAdd);
    expect(cardColumn.cards.length).toBe(3);
    expect(cardColumn.cards[cardColumn.cards.length - 1]).toBe(cardToAdd);
  });
});
