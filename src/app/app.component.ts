import { Component } from '@angular/core';
import { persistState } from '@datorama/akita';
import { akitaConfig } from "@datorama/akita";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
 constructor() {
  persistState();
  akitaConfig({
    resettable: true
  });
 }
}
