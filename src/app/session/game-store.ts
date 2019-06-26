import { Game } from './../model/game';
import { StoreConfig, EntityState, EntityStore } from '@datorama/akita';

export interface GameState extends EntityState<Game> {}

@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<Game> {
  constructor() {
    super();
  }
}