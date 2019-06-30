import { GameQuery } from '../session/game-query';
import { Game } from '../model/game';
import { Injectable } from '@angular/core';
import { GamesStore } from '../session/game-store';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private gameStore: GamesStore, private GameQuery: GameQuery) { }

  //for create a game on list

  public create(game: Game) {
    game.id = this.uuid();
    this.gameStore.add(game);
  }

  //for update a game on list 
  //i could use upsert(id: IDS, entity: Entity, options) for add & update on one function

  public update(game: Game) {
    this.gameStore.update(game.id, game);
  }

  //for remove a game on list 

  public delete(game: Game) {
    this.gameStore.remove(game.id);
  }

  public getAll() {
    return this.GameQuery.selectAll();
  }

  public get(id) {
    return this.GameQuery.getEntity(id);
  }

  public clear() {
    return this.gameStore.reset();
  }


//Function for random ID

  uuid()
  {
    var seed = Date.now();
    if (window.performance && typeof window.performance.now === "function") {
        seed += performance.now();
    }

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (seed + Math.random() * 16) % 16 | 0;
        seed = Math.floor(seed/16);

        return (c === 'x' ? r : r & (0x3|0x8)).toString(16);
    });

    return uuid;
}
}