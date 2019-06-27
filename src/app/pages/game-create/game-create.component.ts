import { ActivatedRoute, Router } from '@angular/router';
import { Game, createGame } from './../../model/game';
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
  id;
  game: Game;
  isUpdate: boolean = false;
  constructor(private formBuilder: FormBuilder, private gameService: GameService, 
    private activatedRoute: ActivatedRoute, private router: Router) { 
   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.game = this.gameService.get(this.id);
      this.isUpdate = true;
    } else {
      this.game = createGame();
      this.id = this.game.id;
    }
    this.gameFormGroup = this.formBuilder.group({
      title: new FormControl(this.game.title, Validators.required),
      description: new FormControl(this.game.description, Validators.required),
      type: new FormControl(this.game.type, Validators.required),
      imageUrl: new FormControl(this.game.imageUrl, Validators.required),
      releaseDate: new FormControl(this.game.releaseDate, Validators.required)
    });
  }

  onSubmit() {
    
    if (this.gameFormGroup.valid) {
      let values = this.gameFormGroup.value;
      values.id = this.game.id;

      if(this.isUpdate) {
        
        this.gameService.update(values);
      }
      else {
        this.gameService.create(values);
      }

      this.router.navigate(['/']);
    }

    this.gameFormGroup.reset();
  }

}
