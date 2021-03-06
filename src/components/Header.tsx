import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getView, TMemView } from '../logic/view';
import { newGame } from '../redux/memory/actionCreators';
import { RootState } from '../redux/memory/reducer';

interface HeaderProps {
  extensions: TMemView;
  onNewGame: () => void;
  nrTiles: number;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const nrMoves = useSelector((state: RootState) => state.nrMoves);
  const nrPairs = useSelector((state: RootState) => state.nrPairs);
  const dispatch = useDispatch();

  const onNewGame2 = () => {
    newGame(props.nrTiles, dispatch);
    props.onNewGame();
  };

  return (
    <header className="header">
      <div className="headerElem size">
        size: {props.extensions.horizontal}x{props.extensions.vertical}
      </div>
      <div className="headerElem length">length: {props.extensions.length}</div>
      <div className="headerElem height">
        header Height: {props.extensions.header.height}
      </div>
      <div className="headerElem extensions">
        {window.innerWidth} x {window.innerHeight}
      </div>
      <div className="headerElem device">{props.extensions.device}</div>
      <div className="headerElem clicks"># Clicks {nrMoves}</div>
      <div className="headerElem pairs"># Paare {nrPairs}</div>
      <div className="headerElem">
        <button
          className="newGame"
          data-testid="Header.new-game"
          onClick={onNewGame2}
        >
          new game
        </button>
      </div>
    </header>
  );
};
