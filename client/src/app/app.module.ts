import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import { PlayerRowComponent } from './player-row/player-row.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlayerTableComponent,
    PlayerRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
