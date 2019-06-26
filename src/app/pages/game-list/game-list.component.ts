import { GameQuery } from './../../session/game-query';
import { GameService } from './../../services/game.service';
import { Game } from './../../model/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) {
    //this.gameService.clear();
    this.games = gameService.getAll();
  }

  ngOnInit() {
  }

  onDelete(game: Game) {
    this.gameService.delete(game);
    const i = this.games.indexOf(game);
    this.games.splice(i, 1);
  }
}
