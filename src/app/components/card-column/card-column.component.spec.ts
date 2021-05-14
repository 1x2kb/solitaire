import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from 'src/app/components/card/card.component';

import { CardColumnComponent } from './card-column.component';

describe('CardColumnComponent', () => {
  let component: CardColumnComponent;
  let fixture: ComponentFixture<CardColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardColumnComponent, CardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
