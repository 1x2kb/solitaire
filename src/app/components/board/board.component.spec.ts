import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardColumnComponent } from 'src/app/components/card-column/card-column.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { CardColorPipe } from 'src/app/pipes/card-color/card-color.pipe';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';
import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        CardColumnComponent,
        CardComponent,
        CardColorPipe,
        FaceNumberPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
