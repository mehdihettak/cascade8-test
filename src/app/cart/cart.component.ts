import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  game: Game;
  description: string;
  title: string;
  imageUrl: string;
  type: string;
  releaseDate: Date;
  price: string;

  constructor(private activatedRoute: ActivatedRoute, private gameService: GameService, private router: Router) {
    this.title = '';
        this.description = '';
        this.imageUrl = '';
        this.type = '';
        this.releaseDate = new Date();
        this.price='';

  }

  ngOnInit() {
  const id = this.activatedRoute.snapshot.paramMap.get('id');
  this.game = this.gameService.get(id);
}}
