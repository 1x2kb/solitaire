import { Card, CardNumber } from 'src/app/models/card.class';
import { Suit } from 'src/app/models/suit.enum';
import { FaceNumberPipe } from './face-number.pipe';

describe('FaceNumberPipe', () => {
  let pipe: FaceNumberPipe;
  beforeEach(() => {
    pipe = new FaceNumberPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('it handles face cards', () => {
    let cardNumber: CardNumber;

    it('converts ace into ace card', () => {
      cardNumber = 1;
      const expected = 'A';
      const actual = pipe.transform(cardNumber);

      expect(expected).toBe(actual);
    });

    it('converts jack into jack card.', () => {
      cardNumber = 11;
      const expected = 'J';
      const actual = pipe.transform(cardNumber);

      expect(expected).toBe(actual);
    });

    it('converts queen into queen card', () => {
      cardNumber = 12;
      const expected = 'Q';
      const actual = pipe.transform(cardNumber);

      expect(expected).toBe(actual);
    });

    it('converts king into king card', () => {
      cardNumber = 13;
      const expected = 'K';
      const actual = pipe.transform(cardNumber);

      expect(expected).toBe(actual);
    });
  });
});
