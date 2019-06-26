import { GameService } from 'src/app/services/game.service';
import { Game } from './../../model/game';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  game: Game;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.game = this.gameService.get(id);
  }

  ngOnInit() {
  }

}
