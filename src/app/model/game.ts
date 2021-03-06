import { ID } from '@datorama/akita';

let id = 1;

export class Game {
    id: ID;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    releaseDate: Date;
    price: string;

    constructor() {
        this.title = '';
        this.description = '';
        this.imageUrl = '';
        this.type = '';
        this.releaseDate = new Date();
        this.price='';
    }
}

// just for ID 1 final fantasy after i will take ID function uuid

export function createGame(): Game {
    let game = new Game();
    game.id =  id;
    id++;

    return game;
}