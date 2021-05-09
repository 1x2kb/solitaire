import { Card, CardNumber } from 'src/app/models/card.class';
import { Suit } from 'src/app/models/suit.enum';

describe('Card', () => {
  let card: Card;

  describe('it should assign properties', () => {
    beforeEach(() => {
      card = new Card(3, Suit.hearts);
    });

    it('should assign card number', () => {
      const expected = 3;
      const actual: CardNumber = card.cardNumber;

      expect(expected).toBe(actual);
    });

    it('should assign suit', () => {
      const expected = Suit.hearts;
      const actual = card.suit;

      expect(expected).toBe(actual);
    });
  });
});
