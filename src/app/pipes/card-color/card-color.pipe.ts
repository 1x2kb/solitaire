import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/models/card/card.class';

@Pipe({
  name: 'cardColor',
})
export class CardColorPipe implements PipeTransform {
  transform(card: Card): string {
    if (card) {
      return card.suitColor;
    }

    return null;
  }
}
