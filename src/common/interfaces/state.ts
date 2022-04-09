import { Move } from "../enums/move";

export interface State {
  status: string;
  finished: boolean;
  nextMove: Move;
  squares: Move[];
}
