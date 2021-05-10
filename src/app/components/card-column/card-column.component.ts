import { Component, Input, OnInit } from '@angular/core';
import { CardColumn } from 'src/app/models/card-column/card-column.class';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.scss'],
})
export class CardColumnComponent implements OnInit {
  @Input()
  cardColumn: CardColumn;

  constructor() {}

  ngOnInit(): void {}
}
