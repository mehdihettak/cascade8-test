import { Game } from './../model/game';

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GamesStore, GameState } from './game-store';

export class GameQuery extends QueryEntity<GameState, Game> {
  constructor(protected store: GamesStore) {
    super(store);
  }
