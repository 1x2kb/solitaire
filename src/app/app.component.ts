import { Component, Input } from '@angular/core';
import { Suit } from 'src/app/models/suit.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Suit = Suit;
  title = 'solitaire';
}
