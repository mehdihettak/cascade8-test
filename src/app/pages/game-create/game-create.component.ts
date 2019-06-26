import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  gameFormGroup: FormGroup;
  
  constructor() {
    this.gameFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      releaseDate: new FormControl(null, Validators.required)
    });
   }

  ngOnInit() {
  }

}
