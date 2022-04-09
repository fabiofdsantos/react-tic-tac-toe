import { Board } from "../Board";
import { useState } from "react";
import { State } from "../../common/interfaces";
import { play } from "../../common/engine";
import { getMoveAsString, Move } from "../../common/enums";

export function Game() {
  const initState = () => {
    const nextMove = Math.random() >= 0.5 ? Move.X : Move.O;

    return {
      status: `Next player: ${getMoveAsString(nextMove)}`,
      nextMove: nextMove,
      finished: false,
      squares: Array(9).fill(null),
    } as State;
  };

  const [state, setState] = useState(initState());

  const handleOnClick = (i: number) => {
    if (state.finished || state.squares[i] !== null) {
      return;
    }

    const newState = play(i, state);
    setState(newState);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={state.squares} onClick={(i) => handleOnClick(i)} />
      </div>
      <div className="game-info">
        <div>{state.status}</div>
        <button
          disabled={!state.finished}
          onClick={() => setState(initState())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
