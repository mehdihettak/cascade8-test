import { Game } from './../../model/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor() {
    let game1 = new Game();
    game1.title = "Final Fantasy";
    game1.type = "RPG";

    let game2 = new Game();
    game2.title = "GTA";
    game2.type = "Action";

    this.games = new Array();
    this.games.push(game1);
    this.games.push(game2);
   }

  ngOnInit() {
  }

}
