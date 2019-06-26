import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GamesStore } from './session/game-store';
import { GameQuery } from './session/game-query';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameInfoComponent,
    GameCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GamesStore, GameQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }
