import { TestBed } from '@angular/core/testing';
import { CardComponent } from 'src/app/components/card/card.component';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';
import { DeckService } from 'src/app/services/deck/deck.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, FaceNumberPipe],
      providers: [DeckService],
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
