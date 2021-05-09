import { Suit } from 'src/app/models/suit.enum';

export declare type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface Card {
  cardNumber: CardNumber;
  suit: Suit;
}

export class Card {
  static readonly cardNumberMapping = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  constructor(public cardNumber: CardNumber, public suit: Suit) {}

  get suitColor(): 'black' | 'red' {
    return this.suit === Suit.clubs || this.suit === Suit.spades ? 'black' : 'red';
  }
}
