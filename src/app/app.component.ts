import { Component } from '@angular/core';
import { Card, Deck } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';
import { DeckService } from 'src/app/services/deck/deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Suit = Suit;
  title = 'solitaire';
}
