import { Injectable } from '@angular/core';
import { Game, createGame } from './../model/game';
import { StoreConfig, EntityState, EntityStore, transaction, ID } from '@datorama/akita';

export interface GameState extends EntityState<Game> {}

@StoreConfig({ name: 'games' })
@Injectable({
  providedIn: 'root'
})
export class GamesStore extends EntityStore<GameState, Game> {

  constructor() {
    super();
    this.initializeGames();
  }

  @transaction()
  initializeGames() {
    let game = createGame();
    game.title = "Final Fantasy";
    game.type = "RPG";

    this.add(game);
    this.setActive(game.id);
  }

}