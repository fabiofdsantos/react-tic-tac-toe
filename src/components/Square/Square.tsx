import { getMoveAsString, Move } from "../../common/enums";

export function Square(props: { value: Move; onClick: () => void }) {
  const { value, onClick } = props;

  return (
    <button className="square" onClick={() => onClick()}>
      {getMoveAsString(value)}
    </button>
  );
}
