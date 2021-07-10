import { TestBed } from '@angular/core/testing';
import { BoardComponent } from 'src/app/components/board/board.component';
import { CardColumnComponent } from 'src/app/components/card-column/card-column.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardColorPipe } from 'src/app/pipes/card-color/card-color.pipe';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';
import { CardService } from 'src/app/services/card/card.service';
import { DeckService } from 'src/app/services/deck/deck.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardComponent,
        FaceNumberPipe,
        CardColorPipe,
        BoardComponent,
        CardColumnComponent,
      ],
      providers: [DeckService, CardService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'solitaire'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('solitaire');
  });
});
