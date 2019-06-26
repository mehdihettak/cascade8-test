import { Game } from './../../model/game';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  gameFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private gameService: GameService) {
    this.gameFormGroup = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      releaseDate: new FormControl(null, Validators.required)
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    let game = new Game();
    let values = this.gameFormGroup.value;

    game.title = values['title'];
    game.description = values['description'];
    game.type = values['type'];
    game.imageUrl = values['imageUrl'];
    game.releaseDate = values['releaseDate'];

    this.gameService.create(game);
  }

}
