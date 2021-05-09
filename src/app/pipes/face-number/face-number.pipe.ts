import { Pipe, PipeTransform } from '@angular/core';
import { Card, CardNumber } from 'src/app/models/card.class';

@Pipe({
  name: 'faceNumber',
})
export class FaceNumberPipe implements PipeTransform {
  transform(cardNumber: CardNumber): string {
    const faces: string[] = Card.cardNumberMapping;

    if (cardNumber) {
      return faces[cardNumber - 1];
    }

    return null;
  }
}
