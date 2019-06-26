import { ID } from '@datorama/akita';

let id = 1;

export class Game {
    id: ID;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    releaseDate: Date;
}

export function createGame(): Game {
    let game = new Game();
    game.id =  id;
    id++;

    return game;
}