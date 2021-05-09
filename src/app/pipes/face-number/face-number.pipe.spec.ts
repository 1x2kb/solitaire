import { Card, CardNumber } from 'src/app/models/card/card.class';
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

  it('returns null if no number is given', () => {
    const expected = null;
    const actual = pipe.transform(undefined);

    expect(actual).toBe(expected);
  });

  describe('it handles face cards', () => {
    let cardNumber: CardNumber;

    it('converts ace into ace card', () => {
      cardNumber = 1;
      const expected = 'A';
      const actual = pipe.transform(cardNumber);

      expect(actual).toBe(expected);
    });

    it('converts jack into jack card.', () => {
      cardNumber = 11;
      const expected = 'J';
      const actual = pipe.transform(cardNumber);

      expect(actual).toBe(expected);
    });

    it('converts queen into queen card', () => {
      cardNumber = 12;
      const expected = 'Q';
      const actual = pipe.transform(cardNumber);

      expect(actual).toBe(expected);
    });

    it('converts king into king card', () => {
      cardNumber = 13;
      const expected = 'K';
      const actual = pipe.transform(cardNumber);

      expect(actual).toBe(expected);
    });
  });
});
