import './style.css';

import React from 'react';
// import { RootState } from "../redux/memory/reducer";
// import { useSelector } from "react-redux";
// import { newGame } from "../redux/memory/actionCreators";
// import { useDispatch } from "react-redux";

interface MemInfoProps {
  onNewGame: () => void;
}

export const MemInfo = ({ onNewGame }: MemInfoProps) => {
  const nrMoves = 99;
  // const nrMoves = useSelector((state: RootState) => state.nrMoves);
  // const nrPairs = useSelector((state: RootState) => state.nrPairs);
  const nrPairs = 2;
  const finished = true;
  // const finished = useSelector((state: RootState) => state.finished);
  // const dispatch = useDispatch();

  const onNewGame2 = () => {
    // newGame(dispatch);
    onNewGame();
  };

  const nrClicksElement = <div>Anzahl der Clicks: {nrMoves}</div>;
  const viewport = (
    <div>
      w x h: {window.innerWidth} x {window.innerHeight}
    </div>
  );
  const newGameElement = (
    <button data-testid="MemInfo.new-game" onClick={onNewGame2}>
      Neues Spiel
    </button>
  );
  const nrPairsElement = <div>Anzahl der Paare: {nrPairs}</div>;

  const newGame2 = (finished: boolean): JSX.Element => {
    return finished ? newGameElement : nrPairsElement;
  };
  return (
    <div className="info">
      {nrClicksElement}
      {viewport}
      {newGame2(finished)}
    </div>
  );
};
