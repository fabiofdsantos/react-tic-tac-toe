import { getMoveAsString, Move } from "./enums";
import { State } from "./interfaces";

function getWinner(squares: Move[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return `${getMoveAsString(squares[a])}`;
    }
  }

  return null;
}

export function play(position: number, state: State): State {
  const newState: State = { ...state };

  const move = state.nextMove;

  newState.squares[position] = move;

  const winner = getWinner(newState.squares);
  if (winner) {
    newState.finished = true;
    newState.status = `Winner ${winner}`;
  } else if (newState.squares.every((elem) => elem !== null)) {
    newState.finished = true;
    newState.status = "Draw";
  } else {
    newState.nextMove = move === Move.X ? Move.O : Move.X;
    newState.status = `Next player: ${getMoveAsString(newState.nextMove)}`;
  }

  return newState;
}
