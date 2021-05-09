import { Card, CardNumber } from 'src/app/models/card.class';
import { FaceDirection } from 'src/app/models/face-direction.enum';
import { Suit } from 'src/app/models/suit.enum';

describe('Card', () => {
  let card: Card;
  const cardNumber: CardNumber = 3;
  const suit: Suit = Suit.hearts;

  describe('it should assign properties', () => {
    beforeEach(() => {
      card = new Card(cardNumber, suit);
    });

    it('should assign card number', () => {
      const expected = cardNumber;
      const actual: CardNumber = card.cardNumber;

      expect(expected).toBe(actual);
    });

    it('should assign suit', () => {
      const expected = suit;
      const actual = card.suit;

      expect(expected).toBe(actual);
    });

    it('should default assign face direction down', () => {
      const expected = FaceDirection.down;
      const actual = card.faceDirection;

      expect(expected).toBe(actual);
    });

    it('should assign face direction up', () => {
      card = new Card(cardNumber, suit, FaceDirection.up);

      const expected = FaceDirection.up;
      const actual = card.faceDirection;

      expect(expected).toBe(actual);
    });
  });
});
