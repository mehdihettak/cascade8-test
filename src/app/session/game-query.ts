import { Game } from './../model/game';

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GamesStore, GameState } from './game-store';

@Injectable({
  providedIn: 'root'
})
export class GameQuery extends QueryEntity<GameState, Game> {
  all$ = this.selectAll();

  constructor(protected store: GamesStore) {
    super(store);
  }
}