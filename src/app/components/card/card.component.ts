import { Component, Input, OnInit } from '@angular/core';
import { Suit } from 'src/app/models/suit.enum';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  Suit = Suit;

  @Input()
  number: number;

  @Input()
  suit: Suit;

  constructor() {}

  ngOnInit(): void {}
}
