import { Injectable } from '@angular/core';
import { Game, createGame } from './../model/game';
import { StoreConfig, EntityState, EntityStore, transaction, ID } from '@datorama/akita';

export interface GameState extends EntityState<Game> { }

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
    game.title = "FINAL FANTASY XIV";
    game.type = "RPG";
    game.imageUrl = 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd2qe_KQZAdXX5NksKY46lyxqkc832IuBoU6qCmG-yFceLcd2-u2D6u-VeMj8rIx6xioKwzj3AAfv_sGI0eb1-xE9BmBsXazrDHENHBZ7hqvD2WO2Y9DHo&usqp=CAc';
    game.description = "Découvrez le royaume d'Éorzéa et partez à l'aventure avec FINAL FANTASY XIV : A Realm Reborn, son extension, Heavensward, ainsi que le tout nouveau Stormblood Idéal pour les joueurs découvrant FINAL FANTASY XIV Online, ce bundle est l'édition la plus complète à ce jour et inclut : FINAL FANTASY XIV: A Realm Reborn.";
    game.price='24€'
    this.add(game);
    this.setActive(game.id);
  }
}
