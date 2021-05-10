import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { CardColorPipe } from './pipes/card-color/card-color.pipe';
import { CardColumnComponent } from './components/card-column/card-column.component';

@NgModule({
  declarations: [AppComponent, CardComponent, BoardComponent, FaceNumberPipe, CardColorPipe, CardColumnComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
