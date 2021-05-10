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

    for (let i = 0; i < BoardComponent.cardColumns; ++i) {
      this.cardColumns.push(new CardColumn());
    }

    const dealAmount = 27;

    for (let i = 0; i < dealAmount; ++i) {
      // const pile = dealAmount / BoardComponent.cardColumns;
      const test1 = i % BoardComponent.cardColumns;
      const test2 = BoardComponent.cardColumns / i;


      debugger;
    }
  }

  ngOnInit(): void {}
}
