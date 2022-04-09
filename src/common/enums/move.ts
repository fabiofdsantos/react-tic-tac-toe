export enum Move {
  "X",
  "O",
}

export function getMoveAsString(move?: Move): "X" | "O" | null {
  switch (move) {
    case Move.X:
      return "X";
    case Move.O:
      return "O";
    default:
      return null;
  }
}
