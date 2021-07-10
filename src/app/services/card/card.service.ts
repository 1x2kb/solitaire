import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/card/card.class';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private selectedCardSubject = new BehaviorSubject<Card>(null);

  constructor() {}

  get selectedCard$(): Observable<Card> {
    return this.selectedCardSubject.asObservable();
  }

  isCardSelected(): Observable<boolean> {
    return this.selectedCard$.pipe(map((card) => !card));
  }

  isThisCardSelected(card: Card): Observable<boolean> {
    return this.selectedCard$.pipe(
      map((selectedCard) => {
        if (card && selectedCard) {
          return (
            selectedCard.cardNumber === card.cardNumber &&
            selectedCard.suit === card.suit
          );
        }

        return false;
      })
    );
  }

  selectCard(card: Card): void {
    this.selectedCardSubject.next(card);
  }
}
