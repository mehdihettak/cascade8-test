import { GameListComponent } from './pages/game-list/game-list.component';
import { GameInfoComponent } from './pages/game-info/game-info.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: GameListComponent },
  { path: 'view/:id', component: GameInfoComponent},
  { path: 'create', component: GameCreateComponent},
  { path: 'edit/:id', component: GameCreateComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
