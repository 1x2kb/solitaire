import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.class';
import { Suit } from 'src/app/models/suit.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Suit = Suit;
  title = 'solitaire';

  testCard = new Card(7, Suit.diamonds);
}
