import { MatTableDataSource } from '@angular/material';
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
  displayedColumns: string[] = ['title', 'view', 'delete'];

  constructor(private gameService: GameService) {
  
  }
  
  ngOnInit() {
    
    this.gameService.getAll().subscribe(games => {
      this.games = games;
     
      this.dataSource = new MatTableDataSource<Game>(this.games);
    });
  }

  onDelete(game: Game) {
    this.gameService.delete(game);
   
  }
}
