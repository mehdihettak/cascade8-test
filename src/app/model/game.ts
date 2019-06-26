import { ID } from '@datorama/akita';


export class Game {
    id: ID;
    title: string;
    description: string;
    imageUrl: string;
    type: string;
    releaseDate: Date;
}