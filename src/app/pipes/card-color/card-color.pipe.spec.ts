import { Card } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';
import { CardColorPipe } from './card-color.pipe';

describe('CardColorPipe', () => {
  let pipe: CardColorPipe;
  beforeEach(() => {
    pipe = new CardColorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns null when given undefined', () => {
    const expected = null;
    const actual = pipe.transform(undefined);

    expect(actual).toBe(null);
  });

  describe('it returns the correct color', () => {
    let card: Card;

    describe('returns black for clubs and spades', () => {
      const expected = 'black';

      it('spades returns black', () => {
        card = new Card(7, Suit.spades);
        const actual = pipe.transform(card);

        expect(actual).toBe(expected);
      });

      it('clubs returns black', () => {
        card = new Card(7, Suit.clubs);
        const actual = pipe.transform(card);

        expect(actual).toBe(expected);
      });
    });

    describe('returns red for diamons and hearts', () => {
      const expected = 'red';

      it('diamond returns red', () => {
        card = new Card(7, Suit.diamonds);
        const actual = pipe.transform(card);

        expect(actual).toBe(expected);
      });

      it('hearts returns red', () => {
        card = new Card(7, Suit.hearts);
        const actual = pipe.transform(card);

        expect(actual).toBe(expected);
      });
    });
  });
});
