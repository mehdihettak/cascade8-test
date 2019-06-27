import { MatTableDataSource } from '@angular/material';
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
  dataSource;
  displayedColumns: string[] = ['id', 'title', 'view', 'delete'];

  constructor(private gameService: GameService) {
    //this.gameService.clear();
    this.games = gameService.getAll();
    this.dataSource = new MatTableDataSource<Game>(this.games);

  }

  ngOnInit() {
  }

  onDelete(game: Game) {
    this.gameService.delete(game);
    const i = this.games.indexOf(game);
    this.games.splice(i, 1);
    this.dataSource = new MatTableDataSource<Game>(this.games);
  }
}
