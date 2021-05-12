import { Component, OnInit } from '@angular/core';
import { CardColumn } from 'src/app/models/card-column/card-column.class';
import { Card, Deck } from 'src/app/models/card/card.class';
import { DeckService } from 'src/app/services/deck/deck.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  static readonly cardColumns = 7;

  cardColumns = [];

  deck: Deck;

  constructor(private deckService: DeckService) {
    this.deck = deckService.createShuffledDeck();

    const dealAmount = 27;
    const dealDeck: Deck = this.deck.slice(
      this.deck.length - dealAmount - 1,
      this.deck.length
    );
    this.deck.length -= dealAmount;

    const piles = [
      [0],
      [1, 7],
      [2, 8, 13],
      [3, 9, 14, 18],
      [4, 10, 15, 19, 22],
      [5, 11, 16, 20, 23, 25],
      [6, 12, 17, 21, 24, 26, 27],
    ];

    for (let i = 0; i < BoardComponent.cardColumns - 1; ++i) {
      const pile = new CardColumn();
      const cards: Card[] = piles[i].map((indexIter) => dealDeck[indexIter]);

      cards.forEach((cardIter) => pile.addCard(cardIter));

      this.cardColumns.push(pile);
    }
  }

  ngOnInit(): void {}
}
