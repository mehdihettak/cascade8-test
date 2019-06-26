import { GameQuery } from './../session/game-query';
import { GameQuery } from '../session/game-query';
import { Game } from '../model/game';
import { Injectable } from '@angular/core';
import { GamesStore } from '../session/game-store';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private gameStore: GamesStore, private GameQuery: GameQuery) {}

  public create(game: Game) {
    this.gameStore.add(game);
  }

  public update(game: Game) {
    this.gameStore.update(game);
  }

  public delete(game: Game) {
    this.gameStore.remove(game.id);
  }

  public getAll() {
    return this.GameQuery.getAll();
  }
  ]
 
}