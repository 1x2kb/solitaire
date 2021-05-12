import { Card } from 'src/app/models/card/card.class';

export interface CardColumn {
  cards: Card[];
}

export class CardColumn {
  constructor(cards: Card[] = []) {
    this.cards = cards;
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }
}
