import { Component, Input, OnInit } from '@angular/core';
import { Suit } from 'src/app/models/suit.enum';
import { Card } from 'src/app/models/card/card.class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  Suit = Suit;

  @Input()
  card: Card;

  constructor() {}

  ngOnInit(): void {}
}
