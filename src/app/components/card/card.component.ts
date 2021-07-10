import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card/card.class';
import { Suit } from 'src/app/models/suit.enum';
import { CardService } from 'src/app/services/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  Suit = Suit;

  @Input()
  card: Card;

  amISelected$: Observable<boolean>;

  constructor(private cardService: CardService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.card) {
      this.amISelected$ = this.cardService.isThisCardSelected(
        changes.card.currentValue
      );
    }
  }

  ngOnInit(): void {}

  cardClicked(card: Card): void {
    this.cardService.selectCard(card);
  }
}
