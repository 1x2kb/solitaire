import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BoardComponent } from './components/board/board.component';
import { FaceNumberPipe } from 'src/app/pipes/face-number/face-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    FaceNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
