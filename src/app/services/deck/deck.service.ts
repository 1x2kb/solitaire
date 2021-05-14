import { Injectable } from '@angular/core';
import { Card, CardNumber, Deck } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private static readonly suits: Suit[] = [
    Suit.hearts,
    Suit.clubs,
    Suit.diamonds,
    Suit.spades,
  ];
  private static readonly cardNumbers: CardNumber[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ];

  createUnshuffledDeck(): Deck {
    const deck: Deck = [];

    for (const suitIter of DeckService.suits) {
      for (const cardNumberIter of DeckService.cardNumbers) {
        deck.push(new Card(cardNumberIter, suitIter));
      }
    }

    return deck;
  }

  createShuffledDeck(): Deck {
    return this.shuffleCards(this.createUnshuffledDeck());
  }

  shuffleCards(deck: Deck, shuffleTimes = 5): Deck {
    for (let i = 0; i < shuffleTimes; ++i) {
      const newDeck: Deck = [];

      for (let j = deck.length; j > 0; j = deck.length) {
        const randomNumber = Math.floor(Math.random() * deck.length);
        newDeck.push(deck.splice(randomNumber, 1)[0]);
      }

      deck = newDeck;
    }

    return deck;
  }

  get suits(): Suit[] {
    return JSON.parse(JSON.stringify(DeckService.suits)) as Suit[];
  }

  get cardNumbers(): CardNumber[] {
    return JSON.parse(JSON.stringify(DeckService.cardNumbers)) as CardNumber[];
  }
}
