import { Comment } from 'app/comment.model';

export class Project {
  constructor(public amount: number, public author: string, public description: string,  public raised: number, public title: string) {}
}
