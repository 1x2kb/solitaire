import { Card, CardNumber } from 'src/app/models/card/card.class';
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

  describe('should contain correct color for suit', () => {
    describe('color is black', () => {

      it('should show spades as black', () => {
        card = new Card(7, Suit.spades);
        expect(card.suitColor).toBe('black');
      });

      it('should show clubs as black', () => {
        card = new Card(7, Suit.clubs);
        expect(card.suitColor).toBe('black');
      });
    });

    describe('color is red', () => {
      it('should show diamond as red', () => {
        card = new Card(8, Suit.diamonds);
        expect(card.suitColor).toBe('red');
      });

      it('should show heart as red', () => {
        card = new Card(8, Suit.hearts);
        expect(card.suitColor).toBe('red');
      });
    });
  });
});
